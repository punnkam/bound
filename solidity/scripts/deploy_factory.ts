import { ethers } from "hardhat";

async function main() {
  const royalty = 1; // Percent
  const fee = ethers.utils.parseEther("0.1");

  const SubFactory = await ethers.getContractFactory("SubFactory");
  const subFactory = await SubFactory.deploy(fee, royalty);

  await subFactory.deployed();

  console.log("Subscription Factory deployed to:", subFactory.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
