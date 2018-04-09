pragma solidity ^0.4.17;
contract NamedRobot {

	string private name = "Hal Finney"; 
	
	function getName() public view returns(string) {
		return name;
	}

	function setName(string newName) public returns(string) {
		name = newName;
		return name;
	}
}