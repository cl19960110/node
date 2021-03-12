const http = require('http')
const url = require('url')

const server = http.createServer((req,res)=>{
  let urlStr = req.url
  let urlObj = url.parse(urlStr,true)
  console.log(urlStr,'url',urlObj);
  switch (urlObj.pathname) {
    case '/api/data':
      res.write(`${urlObj.query.cb}("heee")`)
      break;

    default:
      res.write('page not found')
      break;
  }
  res.end()

})
server.listen(8080,()=>{
  console.log(88888888888888888);
})
