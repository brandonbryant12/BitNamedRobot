contract("helloworld", function(accounts) {
	it("2+2 =4 ", function(){
		assert.equal(2+2, 4);
	});

	it("First account should be a valid ETH address", function(){

		let account = accounts[0].toUpperCase();
		let expected = "0x1d99855f515D17872027071ECEE8dBE5B691A1E9".toUpperCase();

		assert.equal(account, expected, "First address was not 0x1d99855f515D17872027071ECEE8dBE5B691A1E9");
	});
});

