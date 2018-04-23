var NamedRobot = artifacts.require("./NamedRobot.sol");

module.exports = function(deployer) {
  deployer.deploy(NamedRobot);
};