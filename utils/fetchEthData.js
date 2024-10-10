const { default: axios } = require("axios")
const Coin = require("../models/Coin")
require('dotenv').config()
const key=process.env.COINGECKO_KEY

const fetchEthData=async()=>{
    try {
        const ethData=await axios.get("https://api.coingecko.com/api/v3/coins/ethereum",{
            headers:{
                accept: 'application/json',
                'x-cg-demo-api-key': key
              }
        })
        const data=await Coin.create({
            coinName:"ethereum",
            price:ethData.data.market_data.current_price.usd,
            marketCapital:ethData.data.market_data.market_cap.usd,
            dayChange:ethData.data.market_data.price_change_percentage_24h
        })
        

    } catch (error) {
        console.log(error);  
    }
}

module.exports=fetchEthData