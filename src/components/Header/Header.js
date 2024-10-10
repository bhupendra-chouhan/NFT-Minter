import React, { useState, useEffect } from "react";

const Header = () => {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Request account access if needed
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        // Get the first account
        setAccount(accounts[0]);
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      alert("MetaMask not detected. Please install MetaMask to use this dApp.");
    }
  };

  useEffect(() => {
    if (account) {
      console.log("Connected account:", account);
    }
  }, [account]);

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="m-0">NFT Minter</h1>
      <button
        onClick={connectWallet}
        className="px-4 py-2 bg-blue-400 text-gray-900 rounded-lg cursor-pointer text-base"
      >
        {account
          ? `${account.slice(0, 6)}...${account.slice(-4)}`
          : "Connect Wallet"}
      </button>
    </header>
  );
};

export default Header;
