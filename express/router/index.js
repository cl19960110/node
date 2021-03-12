const express = require('express')

const router = express.Router()

const {list} = require('../controller')

router.get('/123',list)
// router.get('/index',(req,res,next)=>{
//   const data = req.query
//   res.send(data)
// })
// router.post('/index',(req,res,next)=>{
//   const data = req.body
//   console.log(data,'data');
//   res.send(data)
// })

module.exports = router
