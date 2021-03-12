const http = require('http')
const url = require('url')
const {createProxyMiddleware} = require('http-proxy-middleware')

const server = http.createServer((req,res)=>{
  let urlString = req.url
  if (/^\/xhr/.test(urlString)) {
    console.log(urlString,'urlString');
    const proxy = createProxyMiddleware('/xhr',{
      target:'http://you.163.com',
      changeOrigin: true, //是否切换源
      pathRewrite:{
        '/^api':''  //会把api替换为空，不写的话就不会替换
      }
    })
    proxy(req,res)
  }else{
    console.log('err');
  }
})
server.listen(8080,()=>{
  console.log('UUUUUUUUU');
})
