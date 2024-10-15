const mintFunc = {
  inputs: [
    {
      internalType: "string",
      name: "_tokenURI",
      type: "string",
    },
  ],
  name: "mint",
  outputs: [
    {
      internalType: "uint256",
      name: "",
      type: "uint256",
    },
  ],
  stateMutability: "nonpayable",
  type: "function",
};

const getAllTokenURIsFunc = {
  inputs: [],
  name: "getAllTokenURIs",
  outputs: [
    {
      internalType: "string[]",
      name: "",
      type: "string[]",
    },
  ],
  stateMutability: "view",
  type: "function",
};