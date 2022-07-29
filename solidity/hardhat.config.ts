require('dotenv').config();
require('hardhat-contract-sizer');

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  defaultNetwork: "goerli",
  networks: {
     hardhat: {

     },
     goerli: {
      url: process.env.GOERLI_ALCHEMY_URL,
      accounts: [process.env.GOERLI_KEY!]
     }
  },
};

export default config;
