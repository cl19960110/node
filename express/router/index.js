const express = require('express')

const router = express.Router()

const {list,token} = require('../controller')

router.get('/api/token',token)
router.get('/api/list',list)
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
