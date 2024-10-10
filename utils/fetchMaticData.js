const { default: axios } = require("axios")
const Coin = require("../models/Coin")
require('dotenv').config()
const key=process.env.COINGECKO_KEY

const fetchMaticData=async()=>{
    try {
        const maticData=await axios.get("https://api.coingecko.com/api/v3/coins/matic-network",{
            headers:{
                accept: 'application/json',
                'x-cg-demo-api-key': key
              }
        })
        const data=await Coin.create({
            coinName:"matic",
            price:maticData.data.market_data.current_price.usd,
            marketCapital:maticData.data.market_data.market_cap.usd,
            dayChange:maticData.data.market_data.price_change_percentage_24h
        })
        

    } catch (error) {
        console.log(error);  
    }
}

module.exports=fetchMaticData