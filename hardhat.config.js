require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.27",
  networks: {
    // Add your network configuration here (e.g., localhost, testnets, etc.)
    localhost: {
      accounts: [process.env.DEPLOYER_PRIVATE_KEY],
      url: process.env.RPC_URL,
    },
  },
};
