require("@nomiclabs/hardhat-waffle");

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.

const ALCHEMY_API_KEY = "Vj3tem8IEHDD5JpLBsbVuLlnngG4WzpT";
const ROPSTEN_PRIVATE_KEY = "9dbae4f7311d4e5244edb02c7690a161341d4515bdef1e460ef65e97c7bc08b9";
const TokenAddrs = "0xe91816a2384ff2ef5EBEC562528EF322f417f189"
module.exports = {
  solidity: {
    version: "0.6.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    dev: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      chainId: 97
    },
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`]
    }
  }
};
