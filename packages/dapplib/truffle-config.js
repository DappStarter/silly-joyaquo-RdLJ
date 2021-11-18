require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture stove dash tortoise comfort install kangaroo army giggle'; 
let testAccounts = [
"0x3f8d7d2d45f7ec5133149472b8309bfb1754ad2520af6e4e0ac99ea3ab1efff7",
"0x3a9b6dbe7aa49d1cc3ff4c274fef975702dfadbf67a4236cc54eedff4dd5bac4",
"0xf397d09a17fed98d8874eae1c6b73c064813f9025c1a6cdd4e9ac51a36ca58a9",
"0xf1a662f4c2a509b7a548b75c867652d6e1a2401408e2a481d3e3d26005ff6642",
"0x1b667976488cf3bd7549a6c2f017c0374c25695c3c5329ebf4952b1efedbb5c1",
"0x27d521520855e32a6fa59153676b09acf1df4422d7da57d25f8646b2cf249473",
"0x2c80a017bfd8c2ec74a2af4b7a0ec5be263b7be545ca069c5d07efcc57a9373a",
"0x304be1668aed45a59f7c95aba2180c76f1cf42998e1b0561e6a6190f8f18e8a9",
"0x8341f61b63bde01e890fc22bb29a8c9ca78f81f174e264776b2ad78e2dc2a09a",
"0xf1343f7b4af7b5ca68dc57ab6cfed8e02fd9e0a63c0c2132a5f7e9b96255c57e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


