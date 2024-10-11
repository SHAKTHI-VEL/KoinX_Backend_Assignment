const Coin = require("../models/Coin");
const deviation = require("../utils/deviation");

const fetchDeviation=async(req,res)=>{
    try {
        const {coin}=req.body;
        const data=await Coin.find({coinName:coin}).sort({ createdAt: -1 }).limit(100);
        if(data.length==0){
            return res.status(404).json({success:false,message:"Coin not found"})
        }else{
        return res.status(200).json({success:true,message:"Fetched data successfully",deviation:deviation(data).toFixed(2)})
        }
    } catch (error) {
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}

module.exports=fetchDeviation