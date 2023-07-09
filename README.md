# Flashloan-Equalizer-Sepolia


This project consists of a smart contract and a script to interact with it and perform flash loans on Ethereum. A flash loan is a cryptocurrency loan that must be repaid in the same transaction. It is a powerful feature that allows developers to temporarily leverage large amounts of liquidity to carry out complex financial operations.

## Smart Contract

The smart contract in this project is called `contractExample.sol`. It is an implementation of the `IERC3156FlashBorrower` interface that allows receiving a flash loan and executing custom business logic. In this example, an unlimited approval is set for the received loan, and additional logic can be added to carry out specific trading operations.

## Interaction Script

The `testnet.js` script is a Node.js script that uses the `ethers.js` library to interact with the flash loans smart contract.

## Configuration

Before running the `testnet.js` script, make sure to configure the following environment variables in a `.env` file:

```
PRIVATE_KEY=YourPrivateKey
PROVIDER=EthereumProviderURL
```

Replace `YourPrivateKey` with the private key of the account that will perform the flash loan, and `EthereumProviderURL` with the URL of the Ethereum provider you want to connect to.
Do not share your private key with anyone

## Usage

1. Clone this repository on your local machine.
2. Run `npm install` to install the necessary dependencies.
3. Configure the environment variables in a `.env` file.
4. Modify the value of `flashLoanReceiverAddress` in the `testnet.js` script with the address of your custom smart contract that implements the `IERC3156FlashBorrower` interface.
5. Modify the values of `flashLoanProviderAddress`, `tokenAddress`, and `vaultOfToken` according to your needs.
6. Run `node testnet.js` to perform a flash loan.

### Warning
I am not responsible for any misuse of this information, and I do not recommend implementing this on the mainnet, make sure you perform the necessary tests on the testnet and make sure you understand how a flash loan works before you implement it.

All this project is made thanks to the documentation of Equalizer Finance, which you can find at: `https://docs.equalizer.finance/`

Enjoy exploring the possibilities of flash loans on Blockchain!😁😁

### Contributions

Contributions to this project are welcome. If you have any improvement suggestions or find a bug, feel free to open an issue or submit a pull request.

### License

This project is licensed under the ISC License. See the `LICENSE` file for more details.
