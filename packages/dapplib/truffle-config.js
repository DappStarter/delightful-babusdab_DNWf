require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom solution mansion creek stick mad give arch outer track'; 
let testAccounts = [
"0xb77812a6a37118032151d94dc468c68f37f604e315c3143f9843a501b5bb7b7c",
"0xa220f2be84251a63e4557727a37901450f47d8a9e286b7233fa2361f6c542303",
"0x7e70fb8bd21f1d9eb0a6cf9bd792e0eef9883507000c0ec4c3cf71917f7145c7",
"0x17b3fad0ba4a6a796554f087342cb4c9e0ede4e5c37b1de14db1696ec843e02d",
"0x6be4b5723e0a04942b3f7e9362c913de7f5ec874f742a7d83835ef8a5c7fa727",
"0xee46dec0b323cfcbf9c77399cda2bbc2ffc1ffa5f2cf0699444fc19e3b56d3d2",
"0x99b11710253d33f4dc18300fa18de6045c4f519cfe3bf6a9f6f8b10344fb79b6",
"0xaec6e4895c57d747861b2b8451fbdd5a566d3979be41c68dbfc84baf78303e98",
"0x886d34cebcf5b102dbe3abab488bec8279b8c3a5f7076eb59df7fc100a34d1be",
"0x4f893bc7f575389269ed9cf93ba94457f92fc49a7da745120f29011c67ebbd83"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

