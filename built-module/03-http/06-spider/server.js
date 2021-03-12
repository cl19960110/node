const https = require('https')
const http = require('http')
const cheerio = require('cheerio')  //用在服务器端需要对DOM进行操作的地方

function filterData(data) {
  const $ = cheerio.load(data)
  $('h3').each((index,el)=>{
    console.log(index);
    console.log($(el).text());
  })
    // console.log(data);
}

const server = http.createServer((res,req)=>{
  let data
  https.get('https://www.meizu.com',(result)=>{
    result.on('data',(chunk)=>{
      data += chunk
    })
    result.on('end',()=>{
      filterData(data)
    })
  })
})
server.listen(8080,()=>{
  console.log('8080');
})
