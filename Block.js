const SHA256 = require('crypto-js/sha256');

module.exports = class Block{
	constructor(timestamp, transactions, previousHash = ''){
		this.timestamp = timestamp;
		this.transactions = transactions;
		this.previousHash = previousHash;
		this.hash = this.calculateHash();
		this.nonce = 0;
	}

	calculateHash(){
		return SHA256(this.previousHash+this.timestamp+JSON.stringify(this.transactions)+this.nonce).toString();
	}

	mineBlock(difficulty){
		var start = Date.now();
		let count = 0;
		while(this.hash.substring(0,difficulty) != Array(difficulty+1).join("0")){
			this.nonce++;
			this.hash = this.calculateHash();
			if (this.hash.substring(0,difficulty) != Array(difficulty+1).join("0")) {
				console.log("Wrong: "+this.hash);	
			}
			count++;
		}
		var end = Date.now();
		console.log("Time taken: "+ (end-start)/1000 + " Seconds");
		console.log("Block Mined with: "+this.hash);
		return count;
	}
}