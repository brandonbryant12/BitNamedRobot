pragma solidity ^0.4.17;
contract NamedRobot {

	bytes32 private name = "Hal Finney"; 
	
	function getName() public view returns(bytes32) {
		return name;
	}

	function setName(bytes32 newName) public  {
		name = newName;
	}
}