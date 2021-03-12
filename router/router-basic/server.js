const http = require('http')
const fs = require('fs')

http.createServer((req,res)=>{
  const urlStr = req.url

  switch (urlStr) {
    case '/':
      res.end('hello')

      break;
    case '/home':
      fs.readFile('./home.html',(err,main)=>{
        res.end(main)
      })

      break;
    case '/app.js':
      fs.readFile('./app.js',(err,main)=>{
        res.end(main)
      })
      break;
    case '/a.png':
      fs.readFile('./a.png',(err,main)=>{
        res.end(main)
      })
      break;

    default:
      res.writeHead(200, {
        'content-type': 'text/html;charset=utf8'
    });
      res.end('未匹配')
      break;
  }

})
.listen(8080,()=>{
  console.log(8080);
})
