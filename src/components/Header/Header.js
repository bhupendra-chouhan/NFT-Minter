import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = ({ setPubAddress }) => {
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
      setPubAddress(account);
    }
  }, [account]);

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="m-0 text-3xl">NFT Minter</h1>

      <div className="w-5/6 lg:text-xl pr-10 flex justify-center">
        <ul className="flex justify-around w-1/2">
          <li key={1} className="cursor-pointer border-white border rounded-lg p-2 hover:text-blue-500">
            <Link to="/">NFT List</Link>
          </li>
          <li key={2} className="cursor-pointer border-white border rounded-lg p-2 hover:text-blue-500">
            <Link to="/create-nft">Create NFT</Link>
          </li>
        </ul>
      </div>

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
