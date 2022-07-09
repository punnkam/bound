// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@chainlink/contracts/src/v0.8/KeeperCompatible.sol";

contract SubNFT is ERC721, Ownable, Pausable, KeeperCompatibleInterface {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    string public baseTokenURI;
    uint256 private sub_price;
    uint256 private sub_interval;
    uint256 private sale_duration;
    uint256 private start_timestamp;

    // Keepers variables
    uint256 public keeper_count;
    uint256 public lastTimestamp;

    /** Mappings */

    // tokenId to sub-deadline
    mapping(uint256 => uint256) tokenToDeadline;

    // sub-deadline to list of tokenIds
    mapping(uint256 => uint256[]) deadlineToIds;

    /** Events */

    // address subscribed with tokenId at x with deadline x
    event SubMinted(
        address subscriber,
        uint256 timestamp,
        uint256 tokenId,
        uint256 deadline
    );

    // address renewed subscription with tokenId at x with deadline x
    event SubRenewed(
        address subscriber,
        uint256 timestamp,
        uint256 tokenId,
        uint256 newDeadline
    );

    // subscription parameters modified before sale
    event ModifiedParams(
        uint256 newPrice,
        uint256 newInterval,
        uint256 timestamp
    );

    constructor(
        string memory _name,
        string memory _symbol,
        uint256 _price,
        uint256 _interval,
        uint256 _duration
    ) ERC721(_name, _symbol) {
        sub_price = _price;
        sub_interval = _interval;
        sale_duration = _duration;
        _pause();
    }

    /** Modifiers */
    modifier tokenExpired(uint256 _tokenId) {
        require(
            block.timestamp > tokenToDeadline[_tokenId],
            "Token has not expired yet"
        );
        _;
    }

    modifier beforeSale() {
        require(start_timestamp == 0, "Invalid Action: Sale has started");
        _;
    }

    /** Getters */
    function get_sub_price() external view returns (uint256) {
        return sub_price;
    }

    function get_sub_interval() external view returns (uint256) {
        return sub_interval;
    }

    function get_sale_duration() external view returns (uint256) {
        return sale_duration;
    }

    /** User functions */

    // mint
    function mint(uint256 _intervals) external payable whenNotPaused {
        uint256 tokenMinted = _tokenIds.current();

        require(
            balanceOf(msg.sender) == 0,
            "You cannot purchase more than 1 of this subscriptionn"
        );
        require(
            msg.value >= sub_price * _intervals,
            "Not enough Ether to purchase this subscription length"
        );
        _safeMint(msg.sender, tokenMinted);
        _tokenIds.increment();

        uint256 deadline = start_timestamp + sub_interval * _intervals;
        tokenToDeadline[tokenMinted] = deadline;
        deadlineToIds[deadline].push(tokenMinted);
        emit SubMinted(msg.sender, block.timestamp, tokenMinted, deadline);
    }

    // renew
    function renew(uint256 _tokenId, uint256 _intervals)
        external
        payable
        tokenExpired(_tokenId)
    {
        require(
            msg.sender == ownerOf(_tokenId),
            "You don't own this subscription"
        );

        require(
            msg.value >= sub_price * _intervals,
            "Not enough Ether to renew this length"
        );

        uint256 newDeadline = tokenToDeadline[_tokenId] +
            sub_interval *
            _intervals;
        tokenToDeadline[_tokenId] = newDeadline;
        deadlineToIds[newDeadline].push(_tokenId);
        emit SubRenewed(msg.sender, block.timestamp, _tokenId, newDeadline);
    }

    /** Owner functions */

    // unpause sale
    function startSale() external onlyOwner {
        _unpause();
        start_timestamp = block.timestamp;
        lastTimestamp = start_timestamp;
    }

    // withdraw funds
    function withdraw() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }

    // adjust subscription parameters
    function adjustParams(uint256 _newPrice, uint256 _newInterval)
        external
        onlyOwner
        beforeSale
    {
        sub_price = _newPrice;
        sub_interval = _newInterval;

        emit ModifiedParams(_newPrice, _newInterval, block.timestamp);
    }

    /** Keeper functions */

    // Boilerplate Keeper
    // Check if we need to check for deadline
    function checkUpkeep(
        bytes calldata /* checkData */
    )
        external
        view
        override
        returns (
            bool upkeepNeeded,
            bytes memory /* performData */
        )
    {
        upkeepNeeded =
            lastTimestamp != 0 &&
            (block.timestamp - lastTimestamp) > sub_interval;
        // We don't use the checkData in this example. The checkData is defined when the Upkeep was registered.
    }

    function performUpkeep(
        bytes calldata /* performData */
    ) external override {
        if (
            lastTimestamp != 0 &&
            (block.timestamp - lastTimestamp) > sub_interval
        ) {
            lastTimestamp += sub_interval;
            keeper_count = keeper_count + 1;
        }
        // We don't use the performData in this example. The performData is generated by the Keeper's call to your checkUpkeep function

        // Check for deadline of current interval timestamp, burn expired NFTs, and remove that deadline
        uint256 currentDeadline = lastTimestamp - sub_interval;
        uint256[] memory ids = deadlineToIds[currentDeadline];
        for (uint16 i = 0; i < ids.length; i++) {
            if (tokenToDeadline[i] >= currentDeadline) {
                _burn(i);
                delete deadlineToIds[currentDeadline];
                delete tokenToDeadline[i];
            }
        }
    }

    // TODO(punnkam): Keeper for withdrawing to creator wallet every pay period

    /** Internal functions */

    // set base uri
    function setBaseURI(string memory _baseTokenURI) public onlyOwner {
        baseTokenURI = _baseTokenURI;
    }
}
