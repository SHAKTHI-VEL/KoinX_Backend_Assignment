const express=require('express')
const fetchStats = require('../controller/fetchStats')
const fetchDeviation = require('../controller/fetchDeviation')
const router=express.Router()

router.route('/stats').get(fetchStats)
router.route('/deviation').get(fetchDeviation)

module.exports=router