const express=require('express');
const MongoConnection = require('./db');
const fetchDataCron = require('./CronJob');
const apiRoutes = require('./routes/apiRoutes');
const app=express();

app.use(express.json());
require('dotenv').config()

const PORT=process.env.PORT;

// DataBase Connection
MongoConnection();

// Cron Job
fetchDataCron();

app.use('/',apiRoutes)

app.get('/',(req,res)=>{
    res.send("Welcome to the server")
})

app.listen(PORT,()=>{
    console.log(`🚀Server Listening on PORT ${PORT}`);
})