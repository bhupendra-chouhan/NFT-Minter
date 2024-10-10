import React, { createContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'

const pubAddressData = createContext();

const AppLayout = () => {
    const [pubAddress, _setPubAddress] = useState("");
    
  return (
    <div>
      <pubAddressData.Provider store={pubAddress}>
        <Header setPubAddress={_setPubAddress} />
        <div>{pubAddress === "" ? (
            <h1 className='flex justify-center items-center max-h-screen h-[100%] bg-orange-500 text-2xl border-4'> Please click the "Connect Wallet" button and make sure you have added Polygon-Testnet network on your Metamask wallet.</h1>
        ) : (
            <Outlet />
        )}</div>
      </pubAddressData.Provider>
    </div>
  );
}

export default AppLayout