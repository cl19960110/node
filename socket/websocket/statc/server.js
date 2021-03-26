const http = require('http')
const path = require('path')
const read = require('./fileStaic')

http.createServer(async (req,res)=>{
  if(req.url === '/favicon.ico') {

  }else{
    let urlStr = req.url
    let filePathName = path.join(__dirname,'/public',urlStr)
    const {data,mimeType} = await read(filePathName)
    res.writeHead(200, {
      'content-type':`${mimeType};charset=utf8`
    });

    res.write(data)
    res.end()
  }



}).listen(8080,()=>{

  console.log(8080);
})
