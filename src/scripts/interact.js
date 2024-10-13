const hre = require("hardhat");
require("dotenv").config();

async function main() {
  // Replace with the deployed contract address
  const contractAddress = process.env.DEPLOYED_SMART_CONTRACT_ADDRESS;
  console.log("deployed contract address: ", contractAddress);

  // Get the contract ABI and deployed contract instance
  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = NFT.attach(contractAddress);

  // Mint an NFT by calling the mint function
  const tokenURI =
    "bafkreia5t7u4b27dxo24bvlpndigjnucgst6z6ck4lemk7oudmeimq32oi";
  const mintTx = await nft.mint(tokenURI);
  await mintTx.wait(); // Wait for the transaction to be mined

  console.log("NFT minted with token URI:", tokenURI);
  console.log("Output of calling mint() function is: ", Number(mintTx.data));

  // Call the getAllTokenURIs function to retrieve all token URIs
//   const tokenURIs = await nft.getAllTokenURIs();
  
// const arrayResult = tokenURIs.map((item) => item.toString()); // assuming each item is a string

// console.log(arrayResult);

  // console.log("All Token URIs:", tokenURIs);
}

// Boilerplate to handle errors and run the main function
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });