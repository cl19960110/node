
var template = require('art-template');
const path = require('path')
const fs = require('fs')
const jwt = require('jsonwebtoken')
const data = require('../model/list')



const list = (req,res,next)=>{

  // res.set('Content-Type','application/json;charset=utf-8')

  // res.render('list',{
  //   data: JSON.stringify(dataArr)
  // })


  // res.render('list-html.art',{
  //   data: dataArr
  // })

  var html = template(path.join(__dirname , '../view/list-html.art'), {
    data

  });

fs.writeFileSync(path.join(__dirname , '../public/list.html'),html)


  res.send('OKAY')
}

const token =(req,res,next)=>{
  const privateKey = fs.readFileSync(path.join(__dirname,'../keys/ras_private_key.pem'))
  const publicKey = fs.readFileSync(path.join(__dirname,'../keys/rsa_public_key.pem'))


  const tk = jwt.sign({username:'admin'},privateKey,{algorithm:'RS256'})
  const decoded = jwt.verify(tk,publicKey)
  // const tk = jwt.sign({username:'admin'},'hahaha')
  // const decoded = jwt.verify(tk,'hahaha')
  res.send(decoded)
}
exports.token = token
exports.list = list
