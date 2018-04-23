var NamedRobot = artifacts.require('./NamedRobot.sol')
/*
contract("NamedRobot", function(accounts){

	it.skip("Should have a default name", async function(){

		console.log('NamedRobot', NamedRobot);

		let instance = await NamedRobot.deployed();

		console.log('instance', instance)

		let name = await instance.getName.call();
		name = hex_to_ascii(name);

		assert.equal(name, "Hal Finney", 'Name was not Hal Finney');
	});
	it.skip("Should be able to set a new name", async function(){
		let instance = await NamedRobot.deployed();

		let newName = '0X4272616e646f6e20426f740000000000';
		
		let nameSet = await instance.setName.call(newName);

		console.log('name set', nameSet);

		let getNameResult = await instance.getName.call();

		assert.equal(hex_to_ascii(getNameResult), newName, 'Name was not BrandonBot');

	});
});*/

function hex_to_ascii(str1)
 {
  var hex  = str1.toString();
  var str = '';
  for (var n = 2; n < hex.length; n += 2) {
    var newStr = String.fromCharCode(parseInt(hex.substr(n, 2), 16));

    if (newStr !== '\u0000') {
      str += newStr
    }
  }
  return str;
 }