// Imports
const ethers = require("ethers");
require('dotenv').config();

// Load the ABI. The flashloan Provider interface can be found on
// https://docs.equalizer.finance/getting-started/how-do-i-borrow-a-flash-loan-a-deep-dive#a.2-flash-loan-provider-abi
const providerAbi = require("./abi.json");

// Private key of the account that will borrow a flash loan
// Important! Never share your private key with anyone!
const privateKey = process.env.PRIVATE_KEY;

const jsonRpcURL = process.env.PROVIDER;

// the address of the FlashLoan Receiver that implements the interface 
// this are the addres for Sepolia Tesnet
// If you want to use a different network, you have to look for address here: https://docs.equalizer.finance/equalizer-deep-dive/smart-contracts

const flashLoanReceiverAddress = ''; // This is the address of the contract you have deployed to carry out the flash loan

const flashLoanProviderAddress = '0x0837b2aCcF87De52a099409863CDb5f3588342AD';

const tokenAddress = '0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9';

// can be extracted from vaultFactory with tokenAddress
const vaultOfToken = '0x08E0EBbb47029FF59fba430eAC5fFb74561232C8';

(async () => {
  // init the provider
  const provider = new ethers.providers.JsonRpcProvider(jsonRpcURL);
  // init the wallet
  const wallet = new ethers.Wallet(privateKey, provider);

  // init the contract of flashloan provider with wallet connected to it
  const flashLoanProviderContract = new ethers.Contract(flashLoanProviderAddress, providerAbi, wallet);
    // const receiverContract = new ethers.Contract (flashLoanReceiverAddress, )
  try {

    // check max loan amount for the token
    const maxAmount = await flashLoanProviderContract.maxFlashLoan(tokenAddress);
    console.log(maxAmount);
    // make sure u set allowance for the provider for the vault
    // get a loan

    console.log(await (await flashLoanProviderContract.flashLoan(flashLoanReceiverAddress, tokenAddress, 100, "0x", {
      gasLimit: 1000000,
      gasPrice: 1000000000
    })).wait());

  } catch (e) {
    console.log(e);
    // Error handling
  }
})();