const http = require('http')
const url = require('url')

const server = http.createServer((req,res) =>{
  let urlStr = req.url
  let urlObj = url.parse(urlStr,true)
  console.log(urlObj.pathname,'urlObj.pathname');

  switch (urlObj.pathname) {
    case '/api/data':
      res.writeHead(200,{
        'content-type':'application/json',
        'Access-Control-Allow-Origin':'*'
      })
      res.write('{"code":200,"data":666}')
      break;

    default:
      res.write('404')
      break;
  }
  res.end()
})

server.listen(8080,()=>{
  console.log('oooooooooo');
})
