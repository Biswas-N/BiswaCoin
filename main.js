const Blockchain = require('./BlockChain.js');
const Transaction = require('./Transactions.js');

let BiswasCoin = new Blockchain();
BiswasCoin.createTransaction(new Transaction("Add1","Add2",100));
BiswasCoin.createTransaction(new Transaction("Add2","Add1",50));

console.log("\nStarting mining...");
BiswasCoin.minePendingTransactions('test');
console.log("\nBalance of Add1 "+BiswasCoin.getBalanceOfAddress('Add1')+"\nBalance of Add2 "+BiswasCoin.getBalanceOfAddress('Add2'));