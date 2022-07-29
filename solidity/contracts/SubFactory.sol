// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import "./SubNFT.sol";

contract SubFactory is Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _subIds;

    uint256 private fee;
    uint256 private royalty;

    /** Mappings */

    // subIds to subNFTs
    mapping(uint256 => SubNFT) subNFTs;

    // ids to owners
    mapping(uint256 => address) ownerOfSub;

    // owners to array of ids
    mapping(address => uint256[]) ownedIds;

    // registry for verified addresses (creators)
    mapping(address => bool) registry;

    /** Events */
    event CreatedSub(string name, string symbol, uint256 id);
    event ModifiedSub(string name, string symbol, uint256 id);
    event StartedSale(uint256 id, uint256 timestamp);

    modifier inRegistry(address _creator) {
        require(registry[_creator], "This address is not in the registry");
        _;
    }

    constructor(uint256 _fee, uint256 _royalty) {
        fee = _fee;
        royalty = _royalty;
    }

    /** Getters */
    function getFee() external view returns (uint256) {
        return fee;
    }

    function getRoyalty() external view returns (uint256) {
        return royalty;
    }

    function getOwnedIds(address _owner)
        external
        view
        returns (uint256[] memory)
    {
        return ownedIds[_owner];
    }

    /** User functions */

    // create new sub
    function createSub(
        string memory _name,
        string memory _symbol,
        uint256 _price,
        uint256 _interval,
        uint256 _max
    ) external payable inRegistry(msg.sender) returns (uint256) {
        require(msg.value >= fee, "Not enough Ether for fee");
        require(_interval > 0, "Invalid sub interval");

        uint256 subId = _subIds.current();
        subNFTs[subId] = new SubNFT(_name, _symbol, _price, _interval, _max);
        ownerOfSub[subId] = msg.sender;
        _subIds.increment();
        emit CreatedSub(_name, _symbol, subId);
        return subId;
    }

    // TODO(punnkam): delete existing sub (non-refundable for now)

    // modify sub
    function modifySub(
        uint256 _id,
        uint256 _price,
        uint256 _interval,
        uint256 _max
    ) external inRegistry(msg.sender) {
        require(ownerOfSub[_id] == msg.sender, "You don't own this sub");
        require(_interval > 0, "Invalid sub interval");

        SubNFT subNFT = subNFTs[_id];
        subNFT.adjustParams(_price, _interval, _max);
        emit ModifiedSub(subNFT.name(), subNFT.symbol(), _id);
    }

    // start sale
    function startSale(uint256 _id) external inRegistry(msg.sender) {
        require(ownerOfSub[_id] == msg.sender, "You don't own this sub");

        subNFTs[_id].startSale();
        emit StartedSale(_id, block.timestamp);
    }

    // TODO(punnkam): Send funds to individual creator treasury

    /** Owner (us) functions */

    // withdraw funds
    function withdraw() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }

    // add partner to registry
    function addPartner(address _partner) external onlyOwner {
        registry[_partner] = true;
    }

    /** Internal functions */
}
