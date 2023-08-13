
pragma solidity ^0.8.0;

contract EventTicket {
  
   // address [] public respOrg;
    
        string public eventName;
        string public evenDetails;
        string public respOrg;
        string public targetGroup;
        uint256 public ticketPrice;
        address respOrgWallet;

        event Purchased(
            address indexed purchaser,
            uint256 indexed amount,
            uint256 indexed timestamp
        );
    

    constructor(
        string memory eventName,
        string memory eventDetails,
        uint256 public ticketPri;
        address respOrgWallet_

    ){
        eventName=eventName;
        evenDetails=eventDetails;
        ticketPrice= ticketPri;
        respOrgWallet=respOrgWallet_;
    }

    function buyEvent() public payable{
        require(ticketPrice,"Ticket is bought");
        
        respOrg.transfer(msg.value);
        emit Purchased(msg.sender,msg.value,block.timestamp);
    }

}
