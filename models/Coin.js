const mongoose=require('mongoose')
const {Schema}=require('mongoose')

const CoinSchema=new Schema({
    coinName:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    marketCapital:{
        type:Number,
        required:true
    },
    dayChange:{
        type:Number,
        required:true
    }
},{timestamps:true})

const Coin=mongoose.model('coin',CoinSchema)
module.exports=Coin