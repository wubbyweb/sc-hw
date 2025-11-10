# Smart Contract Project

## Description
This is a hello world smart contract project for SUI blockchain using Move programming language.

## Prerequisites
- Install SUI CLI: Follow [SUI Installation Guide](https://docs.sui.io/guides/developer/getting-started/sui-install)
- Create a SUI wallet: `sui client new-address ed25519`
- Get test SUI tokens: Use [SUI Faucet](https://docs.sui.io/guides/developer/getting-started/get-coins) for Devnet/Testnet
- Wallet with at least 0.01 SUI for gas fees (approximate deployment cost)

## Installation
1. Clone or navigate to the project directory
2. Ensure SUI CLI is installed and configured

## Deployment
1. Switch to Devnet: `sui client switch --env devnet`
2. Publish the package: `sui client publish --gas-budget 10000000`
   - Note: Gas budget of 10,000,000 units is sufficient for deployment
   - Approximate gas fee: 0.01 SUI (may vary based on network conditions)

## Test Call
After deployment, note the Package ID from the publish output.
To mint a HelloWorld object:
```
sui client call --package <PACKAGE_ID> --module hello_world --function mint --gas-budget 1000000
```
- Approximate gas fee for test call: 0.001 SUI

## Running the Interactive UI
1. Install Node.js and npm
2. Install dependencies: `npm install`
3. Start the server: `npm run dev`
4. Open http://localhost:3000 in your browser
5. Connect your Sui Wallet (install Sui Wallet extension if needed)
6. Enter the deployed Package ID
7. Click "Mint Hello World Object" to test the contract
8. View the transaction on the embedded blockchain explorer

## License
MIT
