/**
 *
 * nodejs 不存在跨域问题，可以直接访问浏览器端被跨域限制的地址
 */
const https = require('https')

https.get('https://m.maoyan.com/ajax/movieOnInfoList?token=&optimus_uuid=62AFAB804A4911EB8C795773EC1BA76E8CF8E26F7A9F445B9C2583ABD2988DBC&optimus_risk_level=71&optimus_code=10',(res)=>{
  let str = ''
  res.on('data',(chunk)=>{
    str += chunk
  })
  res.on('end',()=>{
    console.log(str);
  })
})
