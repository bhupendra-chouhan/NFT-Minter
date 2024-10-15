import React, { useEffect, useState } from "react";

const NftCard = ({ metaDataIpfsHash }) => {
  const [metaData, _setMetaData] = useState({
    name: "",
    description: "",
    imageIpfsHash: "",
    attributes: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `https://gateway.pinata.cloud/ipfs/${metaDataIpfsHash}`
      );
      const resultJSON = await result.json();
      _setMetaData({
        name: resultJSON?.name,
        description: resultJSON?.name,
        imageIpfsHash: resultJSON?.image,
        attributes: resultJSON?.attributes,
      });
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-200 border-4 text-2xl shadow-xl shadow-black border-black flex-col flex items-center max-w-fit m-5 p-4 rounded-lg">
      <div className="foodlogo-container h-64 flex rounded-xl overflow-hidden">
        <img
          className="foodlogo zoom-in-foodlogo sm:w-full md:w-fit bg-cover rounded-xl transition-transform duration-300 ease-in-out hover:transition-transform hover:scale-125"
          src={`https://gateway.pinata.cloud/ipfs/${metaData?.imageIpfsHash}`}
        />
      </div>
      <h2>
        <span className="font-bold text-gray-500">Name: </span>
        <span>{metaData?.name}</span>
      </h2>
      <h4>
        <span className="font-bold text-gray-500">Description: </span>
        <span>{metaData?.description}</span>
      </h4>
      <h4>
        <span className="font-bold text-gray-500">Creator's GitHub: </span>
        <a
          href={`https://github.com/${metaData?.attributes[1]?.value}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {metaData?.attributes[1]?.value}{" "}
          <span className="sm:text-2xl">
            <ion-icon name="open"></ion-icon>
          </span>
        </a>
      </h4>
    </div>
  );
};

export default NftCard;
