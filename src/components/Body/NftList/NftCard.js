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
        description: resultJSON?.description,
        imageIpfsHash: resultJSON?.image,
        attributes: resultJSON?.attributes,
      });
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-200 border-4 text-2xl shadow-xl shadow-black border-black flex-col flex gap-2 text-center items-center max-w-96 m-5 p-4 rounded-lg">
      <div className="foodlogo-container h-64 flex rounded-xl overflow-hidden">
        <img
          className="foodlogo zoom-in-foodlogo sm:w-full md:w-fit bg-cover rounded-xl transition-transform duration-300 ease-in-out hover:transition-transform hover:scale-125"
          src={`https://gateway.pinata.cloud/ipfs/${metaData?.imageIpfsHash}`}
        />
      </div>
      <h2>
        <span className="font-bold text-blue-500 text-3xl">Name: </span>
        <div className="text-4xl font-semibold">{metaData?.name}</div>
      </h2>
      <h4>
        <span className="font-bold text-blue-500 text-3xl">Description: </span>
        <div>{metaData?.description.slice(0, 120)}...</div>
      </h4>
      <h4>
        <span className="font-bold text-blue-500 text-3xl">
          Creator's GitHub:{" "}
        </span>
        <div>
          <a
            href={`https://github.com/${metaData?.attributes[1]?.value}`}
            target="_blank"
            className="underline hover:text-violet-600"
            rel="noopener noreferrer"
          >
            {metaData?.attributes[1]?.value}{" "}
            <span className="sm:text-2xl">
              <ion-icon name="open"></ion-icon>
            </span>
          </a>
        </div>
      </h4>
    </div>
  );
};

export default NftCard;
