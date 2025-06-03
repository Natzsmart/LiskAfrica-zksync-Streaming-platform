import { HardhatUserConfig } from "hardhat/config";
import "@matterlabs/hardhat-zksync";
import "@nomicfoundation/hardhat-verify";
import "dotenv/config";

const config: HardhatUserConfig = {
  defaultNetwork: "liskSepoliaTestnet",
  networks: {
    liskSepoliaTestnet: {
      url: "https://rpc.sepolia-api.lisk.com",
      accounts: [process.env.PRIVATE_KEY || ""],
    },

    zkSyncSepoliaTestnet: {
      url: "https://sepolia.era.zksync.dev",
      ethNetwork: "sepolia",
      zksync: true,
      verifyURL: "https://explorer.sepolia.era.zksync.dev/contract_verification",
    },

    hardhat: {
      zksync: true,
    },
  },

  zksolc: {
    version: "latest",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },

  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      viaIR: true,
    },
  },

  sourcify: {
    enabled: true,
  },

  etherscan: {
    apiKey:process.env.LISK_API_KEY || "", //{
      //liskSepoliaTestnet: process.env.LISK_API_KEY || "",
    //},
    customChains: [
      {
        network: "liskSepoliaTestnet",
        chainId: 4202,
        urls: {
          apiURL: "https://sepolia-blockscout.lisk.com/api",
          browserURL: "https://sepolia-blockscout.lisk.com",
        },
      },
    ],
  },
};

export default config;
