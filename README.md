# BiswaCoin

Blockchain's proof of work implementation based on [cointelegraph.com's article](https://cointelegraph.com/explained/proof-of-work-explained)
- Uses sha256 hashing algorithm
- Does mining based on proof of work
- Finds a random hash which has leading "difficulty" no of zeros (default difficulty is 3)
- Displays time taken for work, wrong hash's and correct hash


## What is BiswaCoin?

BiswaCoin provides a command line interface (CLI) to mine transactions between two address (Add1 & Add2) based on proof of work algorithm. The work is to find a sha256 hash sequence which has leading "difficulty" no of zeros (default difficulty is 3, Example: 000e3d24e5a....). Thus, work efficency is measured using time.

## Requirements

* [Node](https://nodejs.org/en/)
* [Npm](https://www.npmjs.com/)
* [Crypto-js](https://www.npmjs.com/package/crypto-js)

## Common setup

![Intro](https://cdn.biswas.coffee/svgs/biswaCoin_intro.svg)

Clone the repo.

```bash
git clone https://github.com/Biswas-N/BiswaCoin.git
cd BiswaCoin
```

Install the dependencies and run the application.
```bash
npm install && npm start
```

## Changing difficulty

By default the difficulty factor is 3, which can be changed to any number between 0 to 64. But keep in mind any number after 6 needs a lot of computational power.
To change it, open ```BlockChain.js``` and change the difficulty parameter inside constructor of ```Blockchain``` class.

## Licence
MIT
