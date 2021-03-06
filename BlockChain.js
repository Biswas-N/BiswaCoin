const Block = require('./Block.js');
const Transaction = require('./Transactions.js');

module.exports = class Blockchain{
	constructor(){
		this.chain = [this.createGenesisBlock()];
		this.difficulty = 3;
		this.pendingTransactions = [];
		this.miningReward = 100;
	}

	createGenesisBlock(){
		return new Block("01/01/2017", "Genesis Block","0")
	}

	getLatestBlock(){
		return this.chain[this.chain.length-1];
	}

	minePendingTransactions(miningRewardAddress){
		let block = new Block(Date.now(),this.pendingTransactions);
		var count = block.mineBlock(this.difficulty);

		console.log("Block Succesfully Mined!\n --> Tried "+count+" no of sha256's");
		this.chain.push(block);

		this.pendingTransactions = [
			new Transaction(null,miningRewardAddress,this.miningReward)
		];
	}

	createTransaction(transaction){
		this.pendingTransactions.push(transaction);
	}

	getBalanceOfAddress(address){
		let balance = 0;

		for(const block of this.chain){
			for(const trans of block.transactions){
				if(trans.fromAddress === address){
					balance -= trans.amount;
				}

				if(trans.toAddress === address){
					balance += trans.amount;
				}
			}
		}
		return balance;
	}

	isChainValid(){
		for (var i = 1; i < this.chain.length; i++) {
			const currentBlock = this.chain[i];
			const previousBlock = this.chain[i-1];
			if (currentBlock.hash != currentBlock.calculateHash()) {return false;}
			if (currentBlock.previousHash!=previousBlock.hash) {return false;}
		}
		return true;
	}
}