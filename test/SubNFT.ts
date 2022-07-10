import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
import { experimentalAddHardhatNetworkMessageTraceHook } from "hardhat/config";

describe("SubNFT", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshopt in every test.
  async function deployFixture() {
    const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
    const ONE_GWEI = 1_000_000_000;

    // params
    const PRICE = ethers.utils.parseEther("1.0");
    const INTERVAL = 30 * 24 * 60 * 60; // month in seconnds
    const MAX = 0; 

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const SubNFT = await ethers.getContractFactory("SubNFT");
    const subNFT = await SubNFT.deploy("Test", "TT", PRICE, INTERVAL, MAX);

    return { subNFT, INTERVAL, PRICE, MAX, owner, otherAccount };
  }

  describe("Deployment", function () {

    it("Should set the right owner", async function () {
      // const { lock, owner } = await loadFixture(deployFixture);
      const { subNFT, owner } = await loadFixture(deployFixture);

      expect(await subNFT.owner()).to.equal(owner.address);
    });

    it("Should be paused", async function () {
      const { subNFT } = await loadFixture(
        deployFixture
      );

      expect(await subNFT.paused()).to.equal(
        true
      );
    });

    // it("Should fail if the unlockTime is not in the future", async function () {
    //   // We don't use the fixture here because we want a different deployment
    //   const latestTime = await time.latest();
    //   const Lock = await ethers.getContractFactory("Lock");
    //   await expect(Lock.deploy(latestTime, { value: 1 })).to.be.revertedWith(
    //     "Unlock time should be in the future"
    //   );
    // });
  });

  describe("Withdrawals", function () {
    describe("Validations", function () {
      it("Mint should revert with correct error when sale is not live", async function () {
        const { subNFT } = await loadFixture(deployFixture);

        await expect(subNFT.mint(1)).to.be.revertedWith(
          "Pausable: paused"
        );
      });

      it("Withdraw should revert with the right error if called from another account", async function () {
        const { subNFT, otherAccount } = await loadFixture(
          deployFixture
        );

        // We use subNFT.connect() to send a transaction from another account
        await expect(subNFT.connect(otherAccount).withdraw()).to.be.revertedWith(
          "Ownable: caller is not the owner"
        );
      });

      it("Withdraw shouldn't fail if it is called by the owner", async function () {
        const { subNFT } = await loadFixture(
          deployFixture
        );

        await expect(subNFT.withdraw()).not.to.be.reverted;
      });

      it("Mint should fail if it is called before the sale is live", async function () {
        const { subNFT, PRICE } = await loadFixture(
          deployFixture
        );

        await expect(subNFT.mint(1, {value: PRICE})).to.be.revertedWith(
          "Pausable: paused");
      });

      it("Mint should fail if it is called with the wrong value", async function () {
        const { subNFT } = await loadFixture(
          deployFixture
        );
        let fakePrice = ethers.utils.parseEther("0.5");
        await subNFT.startSale();

        await expect(subNFT.mint(1, {value: fakePrice })).to.be.revertedWith(
          "Not enough Ether to purchase this subscription length");
      });

      it("Mint shouldn't fail if it is called after the sale is live", async function () {
        const { subNFT, PRICE } = await loadFixture(
          deployFixture
        );

        await subNFT.startSale();
        await expect(subNFT.mint(1, {value: PRICE})).not.to.be.reverted;
      });

      it("Renew should fail if it is called using the wrong tokenId", async function () {
        const { subNFT, PRICE } = await loadFixture(
          deployFixture
        );
        await subNFT.startSale();
        await subNFT.mint(1, {value: PRICE});
        await subNFT.endSale();

        await expect(subNFT.renew(1, 5, {value: ethers.utils.parseEther("5.0")})).to.be.revertedWith(
          "This tokenId doesn't exist");
      });

      it("Renew should fail if it is called by a non-owner", async function () {
        const { subNFT, PRICE, otherAccount } = await loadFixture(
          deployFixture
        );
        await subNFT.startSale();
        await subNFT.mint(1, {value: PRICE});
        await subNFT.endSale();

        await expect(subNFT.connect(otherAccount).renew(0, 5, {value: ethers.utils.parseEther("5.0")})).to.be.revertedWith(
          "You don't own this subscription");
      });

      it("Renew should fail if it is called with too little Ether", async function () {
        const { subNFT, PRICE, otherAccount } = await loadFixture(
          deployFixture
        );
        await subNFT.startSale();
        await subNFT.mint(1, {value: PRICE});
        await subNFT.endSale();

        await expect(subNFT.renew(0, 5, {value: ethers.utils.parseEther("4.0")})).to.be.revertedWith(
          "Not enough Ether to renew this length");
      });

      it("Renew shouldn't fail if it is called after subscription expires", async function () {
        const { subNFT, PRICE, INTERVAL} = await loadFixture(
          deployFixture
        );

        await subNFT.startSale();
        await subNFT.mint(1, {value: PRICE});
        await subNFT.endSale();
        
        let expiration = await subNFT.get_token_deadline(0); 
        await time.increaseTo(expiration);

         await expect(subNFT.renew(0, 1, {value: ethers.utils.parseEther("1.0")})).not.to.be.reverted;
      });
    });

    describe("Events", function () {
      // it("Should emit an event on withdrawals", async function () {
      //   const { subNFT } = await loadFixture(
      //     deployFixture
      //   );

      //   const unlockTime = 10;
      //   await time.increaseTo(unlockTime);

      //   await expect(subNFT.withdraw())
      //     .to.emit(subNFT, "Withdrawal")
      //     .withArgs(subNFT, anyValue); // We accept any value as `when` arg
      // });
    });

    describe("Transfers", function () {
      // it("Should transfer the funds to the owner", async function () {
      //   const { subNFT, owner, otherAccount } = await loadFixture(
      //     deployFixture
      //   );

      //   await subNFT.connect(otherAccount).mint(5, {value: ethers.utils.parseEther("5.0")});

      //   await expect(subNFT.withdraw()).to.changeEtherBalances(
      //     owner, 5.0
      //   );
      // });
    });
  });
});
