const logger = require('../../utils/log')
const querystring = require('querystring')

const http = require('http')
const https = require('https')

const serve = http.createServer((request,response)=>{ //创建一个服务
  // let data = ''
  // request.on('data',(chunk)=>{  //监听前端请求过来的数据，拼接起来
  //   data += chunk
  // })
  // request.on('end',()=>{  //前端数据传输完成
  // })
  https.get('https://www.xiaomiyoupin.com/mtop/market/cat/list',(result)=>{
    let data = ''
    result.on('data',(chunk)=>{
      data += chunk
    })
    result.on('end',()=>{
      response.writeHead(200,{
        'content-type': 'application/json;charset=utf-8'
      })
      response.write(data) //返回数据给前端
      response.end()  //返回结束
    })
  })


})


serve.listen(8080,()=>{ //监听8080端口
  console.log('localhost:8080');
})


