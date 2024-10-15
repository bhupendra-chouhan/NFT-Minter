# NFT-Minter (Open-Sourced)

---
## Project Description: 
The NFT-Minter Project is an open-source, blockchain-based application designed to simplify the NFT creation process. It allows users to upload their NFT images, generate JSON metadata for the NFT, and interact with a dynamic NFT marketplace. Beginners can contribute to the project while learning how to develop decentralized applications (dApps). By offering easy integration with blockchain technology, the project aims to empower users to engage in the world of NFTs, regardless of technical expertise.

---
## Project Vision:
Vision:
The vision of the NFT-Minter Project is to create a collaborative, beginner-friendly platform that fosters innovation and learning within the blockchain ecosystem. By enabling users to mint NFTs, view all listed tokens, and access detailed information about each minted token, the project serves as both a creative hub and a learning tool. With a focus on community contribution and open-source development, it aims to lower the barriers to entry for blockchain and NFT technology, encouraging a wider audience to explore and contribute to decentralized platforms.

---
## Some Project Screenshots:
### - Desktop view:
![image](https://github.com/user-attachments/assets/59cd907d-7831-432a-9085-1d0959b735ad)
![image](https://github.com/user-attachments/assets/70d81651-6449-49df-9ae2-dbbad424ac1c)

### - Mobile View:
![image](https://github.com/user-attachments/assets/86674a63-c78c-4f11-ab81-3d159e55b7cf)
![image](https://github.com/user-attachments/assets/1120c36a-d9af-4e8f-8a38-a06b4945787c)

---
## Technologies Used:
- ReactJS - For building the frontend
- TailwindCSS - For Styling
- Solidity - For writing the smartcontract
- HardHat - for compiling and deploying the smartcontract
- ThirdWeb - For building integeration function 

---
## Project Setup Guide:

1. Clone the project using command: ```git clone https://github.com/bhupendra-chouhan/NFT-Minter.git```
2. Install the npm packages using any one of the three comands below mentioned: 
    ```npm install```
    ```npm --legacy-peer-deps install```
    ```npm --force install```
3. Create a ```.env``` file in the root directory, and copy-paste the environment variable mentioned below into it:
    ```
    EDUCHAIN_NETWORK_RPC_URL="https://open-campus-codex-sepolia.drpc.org"
    REACT_APP_EDUCHAIN_CHAIN_ID=656476
    REACT_APP_EDUCHAIN_DEPLOYED_SMART_CONTRACT_ADDRESS="0x7F3ad6b705251D1EC4F3B10473AdA9Ed93753BAb"

    REACT_APP_THIRDWEB_CLIENT_ID=""

    REACT_APP_PINATA_JWT=""
    REACT_APP_PINATA_GATEWAY=""    
    ```

    ***Note: You need to fill in the values for the empty environment variables yourself in order to successfully run this project locally on your system.***

4. Finally, start the server by using this command: ```npm run start``` 
