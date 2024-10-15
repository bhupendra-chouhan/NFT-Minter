import React from 'react'

const HowToContribute = () => {
  return (
    <div>
        <div>How To Mint Your NFT and make your first open-source contribution in a Web3 dApp:</div>
        <p>Upload your NFT image.</p>
        <p>Fill the fields given in the 'Create NFT Metadata' form.</p>
        <p>Copy the Metadata, by clicking the 'Copy to Clipboard' button</p>
        <p>Create a .json file (ex. nftName.json) and paste the copied metadata inside that .json file. </p>
        <p>Fork the github repo</p>
        <p>Clone the forked repo in you local machine using the <code>git clone</code> command.</p>
        <p>Put your nftName.json file inside the folder path : ./src/assets/PendingToMintNFTsJSONMetadata/</p>
        <p>Commit your changes</p>
        <p>Create a pull</p>
    </div>
  )
}

export default HowToContribute