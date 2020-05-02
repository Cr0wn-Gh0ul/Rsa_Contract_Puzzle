const PrivateKeyProvider = require("truffle-privatekey-provider");
const dotenv = require('dotenv');
dotenv.config();

const PK = process.env.PRIVATE_KEY;
const INFURA_KEY = process.env.INFURA_KEY
if (!PK || !INFURA_KEY) {
  console.error("Please set a mnemonic and infura key.")
  return
}

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
     },
    live: {
      network_id: 1,
      provider: new PrivateKeyProvider(PK, "https://mainnet.infura.io/v3/" + INFURA_KEY),
      gas: 4000000,
      gasPrice: 5000000000
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.6.0",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
       settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
        evmVersion: "petersburg"
       }
    }
  }
}
