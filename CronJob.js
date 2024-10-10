const cron=require('node-cron');
const fetchBitcoinData = require('./utils/fetchBitcoinData');
const fetchMaticData = require('./utils/fetchMaticData');
const fetchEthData = require('./utils/fetchEthData');

const fetchDataCron=()=>{
    cron.schedule('0 */2 * * *',()=>{
        fetchBitcoinData();
        fetchMaticData();
        fetchEthData();
    })
}

module.exports=fetchDataCron