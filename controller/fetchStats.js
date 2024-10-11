const Coin = require("../models/Coin");

const fetchStats=async(req,res)=>{
    try {
        const {coin}=req.body;
        const data=await Coin.findOne({coinName:coin}).sort({ createdAt: -1 });
        if(!data){
            return res.status(404).json({success:false,message:"Coin not found"})
        }
        return res.status(200).json({success:true,message:"Fetched data successfully",data:{
            "price":data.price,
            "marketCap":data.marketCapital,
            "dayChange":data.dayChange
        }})
    } catch (error) {
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}

module.exports=fetchStats