import React, { createContext, useState } from "react";
import Metadata from "./MetadataJson";
import IpfsNftUpload from "./IpfsNftUpload";
import uploadedNFTImageURIData from "../../../context/NftContext";

const CreateNft = () => {
  const [uploadedNFTImageURI, _setUploadedNFTImageURI] = useState("xxxxxxxxxxxxxxxxxxx");

  return (
    <uploadedNFTImageURIData.Provider value={{uploadedNFTImageURI}}>
      <div className="flex flex-col mx-5 gap-5 items-center mt-10">
        {/* IPFS upload */}
        <IpfsNftUpload setUploadedNFTImageURI={_setUploadedNFTImageURI} />

        {/* Metadata Generator */}
        <Metadata />
      </div>
    </uploadedNFTImageURIData.Provider>
  );
};

export default CreateNft
export {uploadedNFTImageURIData};
