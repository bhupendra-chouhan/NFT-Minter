// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";

contract NFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _nftIds;

    constructor() ERC721("Bhupendra's NFT", "BNFT") {}

    function mint(string memory _tokenURI) public returns (uint) {
        _nftIds.increment();
        uint256 newNftId = _nftIds.current();
        _safeMint(msg.sender, newNftId);
        _setTokenURI(newNftId, _tokenURI);
        return newNftId;
    }

    // New function to get URIs of all created tokens
    function getAllTokenURIs() public view returns (string[] memory) {
        uint256 totalNFTs = _nftIds.current();
        string[] memory tokenURIs = new string[](totalNFTs);

        for (uint256 i = 0; i < totalNFTs; i++) {
            uint256 tokenId = i + 1; // Token IDs start from 1
            tokenURIs[i] = tokenURI(tokenId);
        }

        return tokenURIs;
    }
}
