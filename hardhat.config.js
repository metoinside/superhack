require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    linea: {
      url: `https://rpc.goerli.linea.build`,
      accounts: [process.env.DEPLOYER],
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/45cb05f851444a51bfd995aef63494d9`,
      accounts: [process.env.DEPLOYER],
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_KEY}`,
      accounts: [process.env.DEPLOYER],
    },
    zkEVM: {
      url: "https://rpc.public.zkevm-test.net",
      accounts: [process.env.DEPLOYER],
    },
    modeSepolia: {
      url: "https://sepolia.mode.network/",
      accounts: [process.env.DEPLOYER],
      gasPrice: 35000000000,
      saveDeployments: true,
    }
  },
}
