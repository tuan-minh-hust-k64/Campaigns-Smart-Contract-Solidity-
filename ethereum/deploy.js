const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const factoryContract = require('./build/CampaignFactory.json');
const provider = new HDWalletProvider(
    process.env.PRIVATE_KEY,
  // remember to change this to your own phrase!
  'https://rinkeby.infura.io/v3/a61a0f83a6ca4577bb88724327bbf03c'
);
const web3 = new Web3(provider);
const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Contract is deployed by: ', accounts[0]);
    const factory = await new web3.eth.Contract(factoryContract.abi)
        .deploy({
            data: factoryContract.evm.bytecode.object
        })
        .send({
            from: accounts[0],
            gas: '10000000'
        })
    console.log('Address of Contract: ', factory.options.address);
    provider.engine.stop();
}
deploy();