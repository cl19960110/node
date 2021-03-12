const http = require('http')
const querystring = require('querystring')

const postData = querystring.stringify({
  city:'深圳',
  age:'18',
  name:'张三',
  shazi:'牛马'
})
const options = {
  protocol:'http:', //协议
  hostname:'localhost',
  method:'post',//请求方式
  port:3000,//端口
  path:'/data',//路径
  headers:{
    'content-type':'application/x-www-form-urlencoded',
    'Content-Length':Buffer.byteLength(postData)
  }
}

const server = http.createServer((req,res)=>{
  const request = http.request(options,(result)=>{

  })
  request.write(postData),
  request.end()
  res.end()
})

server.listen(8080,()=>{
  console.log('80880880');
})
