var NamedRobot = artifacts.require("NamedRobot");

module.exports = function(deployer) {
  deployer.deploy(NamedRobot);
};