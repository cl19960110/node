// const express = require('express')
// const router = require('./router')

// const bodyParser = require('body-parser')

// const app = express()

// // app.use(bodyParser.urlencoded({extended:false}))

// // app.use(bodyParser.json())

// app.use(express.static('./public'))



// app.listen(8080,()=>{
//   console.log(8080);
// })



//1.引入express和express-static模块
const express = require("express");
//2. 创建服务器
let app = express();
//3. 指定文件夹
//浏览器可以浏览当前文件目录下的'「www」文件夹
app.use(express.static('public'))
//4. 服务器监听
app.listen(8080,()=>{
  console.log(666);
});
