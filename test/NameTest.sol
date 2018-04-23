pragma solidity ^0.4.17;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/NamedRobot.sol";

contract NameTest {

	NamedRobot namedRobot = NamedRobot(DeployedAddresses.NamedRobot());

    function testGetName() {

      bytes32 expected = "Hal Finney";
      bytes32 name = namedRobot.getName();
      Assert.equal(expected, name, "default name should be Hal Finney");

    }

      function testSetName() {
      bytes32 newName = "BrandonBot";
      namedRobot.setName(newName);
      bytes32 name = namedRobot.getName();
      Assert.equal(newName, name, "New name should be BrandonBot");

    }
	
}