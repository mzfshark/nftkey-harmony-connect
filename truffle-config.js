require("dotenv").config();
require("ts-node").register({
  files: true,
});

import HDWalletProvider from "@truffle/hdwallet-provider";
const mnemonic = process.env.MNEUMONIC;
const infuraKey = process.env.INFURA_PROJECT_ID;
const etherscanApiKey = process.env.ETHERSCAN_API_KEY;
const bscscanApiKey = process.env.BSC_SCAN_API_KEY;
const ftmscanApiKey = process.env.FTM_SCAN_API_KEY;
const harmonyApiKey = process.env.HARMONY_SCAN_API_KEY;
const fromAddress = process.env.FROM_ADDRESS;

export const networks = {
  // Useful for deploying to a public network.
  // NB: It's important to wrap the provider as a function.
  // ropsten: {
  // provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/YOUR-PROJECT-ID`),
  // network_id: 3,       // Ropsten's id
  // gas: 5500000,        // Ropsten has a lower block limit than mainnet
  // confirmations: 2,    // # of confs to wait between deployments. (default: 0)
  // timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
  // skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
  // },
  development: {
    host: "127.0.0.1",
    port: 7545,
    network_id: "*",
  },
  bsctestnet: {
    provider: () => new HDWalletProvider(
      mnemonic,
      `https://data-seed-prebsc-2-s1.binance.org:8545/`
    ),
    network_id: 97,
    confirmations: 2,
    from: fromAddress,
  },
  bsc: {
    provider: () => new HDWalletProvider(mnemonic, `https://bsc-dataseed.binance.org/`),
    network_id: 56,
    confirmations: 2,
    from: fromAddress,
  },
  harmony: {
    provider: () => new HDWalletProvider(mnemonic, `https://api.harmony.one/`),
    network_id: 1666600000,
    confirmations: 2,
    from: fromAddress,
  },
  ftm: {
    provider: () => new HDWalletProvider(mnemonic, `https://rpc.ftm.tools`),
    network_id: 250,
    confirmations: 2,
    from: fromAddress,
  },
  avax: {
    provider: () => new HDWalletProvider(mnemonic, `https://api.avax.network/ext/bc/C/rpc`),
    network_id: 43114,
    confirmations: 2,
    from: fromAddress,
  },
  ropsten: {
    provider: () => new HDWalletProvider(
      mnemonic,
      `https://ropsten.infura.io/v3/${infuraKey}`
    ),
    network_id: 3,
    confirmations: 2,
    from: fromAddress,
  },
  main: {
    provider: () => new HDWalletProvider(
      mnemonic,
      `https://mainnet.infura.io/v3/${infuraKey}`
    ),
    network_id: 1,
    confirmations: 2,
    from: fromAddress,
  },
};
export const mocha = {
  // timeout: 100000
};
export const compilers = {
  solc: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 999999,
      },
      evmVersion: "default",
    },
  },
};
export const plugins = ["truffle-plugin-verify"];
export const api_keys = {
  etherscan: etherscanApiKey,
  bscscan: bscscanApiKey,
  ftmscan: ftmscanApiKey,
  harmony: harmonyApiKey,
};
