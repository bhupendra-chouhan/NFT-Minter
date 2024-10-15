import React, { useState, useEffect } from 'react'
import NftCard from './NftCard'
import { readContract, createThirdwebClient, getContract } from "thirdweb";
import { defineChain } from "thirdweb/chains";

// create the client with your clientId, or secretKey if in a server environment
const client = createThirdwebClient({
  clientId: process.env.REACT_APP_THIRDWEB_CLIENT_ID,
});

const chainId = 656476;

// connect to your contract
const contract = getContract({
  client,
  chain: defineChain(chainId),
  address: process.env.REACT_APP_EDUCHAIN_DEPLOYED_SMART_CONTRACT_ADDRESS,
});

const NftList = () => {
  const [nftList, _setNftList] = useState([]);

  useEffect(()=>{
    getAllTokenURIs();
  },[])

    const getAllTokenURIs = async () => {
      let returnValue = await readContract({
        contract: contract,
        method: "function getAllTokenURIs() view returns (string[])",
        params: [],
      });
      _setNftList(returnValue);
    };
  return (
    <div className="flex flex-wrap justify-center">
      {nftList?.map((ele) => (
        <NftCard metaDataIpfsHash={ele} key={ele} />
      ))}
    </div>
  );
}

export default NftList