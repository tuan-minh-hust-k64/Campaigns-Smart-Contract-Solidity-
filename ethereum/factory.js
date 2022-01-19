import web3 from './web3';
import factoryContract from './build/CampaignFactory.json';

const factory = new web3.eth.Contract(
    factoryContract.abi,
    '0xd6E86911b0e1337e05f31e7db3208a763614dc8A'
);
export default factory;