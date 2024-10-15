# Project Title:  NFT-Minter

## Project Description: 


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
    EDUCHAIN_DEPLOYER_PRIVATE_KEY=""
    EDUCHAIN_NETWORK_RPC_URL="https://open-campus-codex-sepolia.drpc.org"
    REACT_APP_EDUCHAIN_CHAIN_ID=656476
    REACT_APP_EDUCHAIN_DEPLOYED_SMART_CONTRACT_ADDRESS="0x7F3ad6b705251D1EC4F3B10473AdA9Ed93753BAb"

    THIRDWEB_SECRET_KEY=""
    REACT_APP_THIRDWEB_CLIENT_ID=""

    REACT_APP_PINATA_JWT=""
    REACT_APP_PINATA_GATEWAY=""    
    ```

    ***Note: You need to fill in the values for the empty environment variables yourself in order to successfully run this project locally on your system.***

4. Finally, start the server by using this command: ```npm run start``` 