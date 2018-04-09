var NamedRobot = artifacts.require('./NamedRobot.sol')


contract("NamedRobot", function(accounts){

	it("Should have a default name", async function(){

		let instance = await NamedRobot.deployed();

		let name = await instance.getName.call();

		assert.equal(name, "Hal Finney", 'Name was not Hal Finney');
	});
	it.skip("Should be able to set a new name", function(){


	});
});