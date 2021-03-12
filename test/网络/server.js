// const http = require('http')

// const server = http.createServer((req,res)=>{
//   let url = req.url

//   res.write(url)
//   res.end()
// })

// server.listen(8090,'localhost',()=>{
//   console.log(8090);
// })

function getYMDHMS(time) {
  const _time =new Date(time);
  console.log(_time,'_time',time);
  let year = _time.getFullYear()
  let month = _time.getMonth() + 1

  if (month < 10){
    month = '0' + month;
  }
console.log(year+month);
return year+month

}


function SameYearMonth(time1,time2) {
  console.log(getYMDHMS(time1)=== getYMDHMS(time2));
return getYMDHMS(time1)=== getYMDHMS(time2)

}
SameYearMonth(1612281599000,1612346340)

