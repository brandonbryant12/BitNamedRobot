var NamedRobot = artifacts.require('./NamedRobot.sol')


contract("NamedRobot", function(accounts){

	it("Should have a default name", async function(){

		let instance = await NamedRobot.new();

		let name = await instance.getName.call();

		assert.equal(name, "Hal Finney", 'Name was not Hal Finney');
	});
	it("Should be able to set a new name", async function(){
		let instance = await NamedRobot.new();

		let newName = "BrandonBot"
		
		let nameSet = await instance.setName.call(newName);
		console.log('name set', nameSet);

		assert.equal(nameSet, newName);

		let getNameResult = await instance.getName.call();

		assert.equal(getNameResult, newName, 'Name was not BrandonBot');

	});
});