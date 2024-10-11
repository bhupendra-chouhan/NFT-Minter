import React from 'react'

const NftCard = () => {
  return (
    <div className="bg-gray-400 flex-col flex items-center max-w-fit m-5 p-4 rounded-lg">
      <div className="foodlogo-container h-64 flex rounded-xl overflow-hidden">
        <img
          className="foodlogo zoom-in-foodlogo sm:w-full md:w-fit bg-cover rounded-xl transition-transform duration-300 ease-in-out hover:transition-transform hover:scale-125"
          //   src={RES_THUMBNAIL_LINK_HEADER + cloudinaryImageId}
          src="https://cdn.pixabay.com/photo/2022/02/18/16/09/ape-7020995_1280.png"
          alt="food-logo"
        />
      </div>
      <h2>
        <span className="font-bold text-gray-500">Title: </span>
        Cool Boy
      </h2>
      <h4>
        <span className="font-bold text-gray-500">Description: </span>
        This is the description
      </h4>
      <h4>
        <span className="font-bold text-gray-500">Creator's (GitHub): </span>
        Bhupendra-Chouhan
      </h4>
    </div>
  );
}

export default NftCard