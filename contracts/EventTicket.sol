// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.15;

contract CrowdfundingProject {
    //defining state variables
    string public projTitle;
    string public projDescription;
    //uint256 public goalAmount;
    uint256 public raisedAmount;
    //address ownerWallet; //address where amount to be transfered

    event Funded(
        address indexed donar,
        uint256 indexed amount,
        uint256 indexed timestamp
    );

    constructor(
        string memory projectTitle,
        //uint256 projgoalAmount,
        string memory projDescript
        //address ownerWallet_
    ) {
        //mapping values
        projTitle = projectTitle;
        //goalAmount = projgoalAmount;
        projDescription = projDescript;
        //ownerWallet = ownerWallet_;
    }

    //donation function
    function makeDonation() public payable {
        //if goal amount is achieved, close the proj
        //require(goalAmount > raisedAmount, "GOAL ACHIEVED");

        //record walletaddress of donor
        //(bool success, ) = payable(ownerWallet).call{value: msg.value}("");
        //require(success, "VALUE NOT TRANSFERRED");

        //calculate total amount raised
        raisedAmount += msg.value;

        emit Funded(msg.sender, msg.value, block.timestamp);
    }
}