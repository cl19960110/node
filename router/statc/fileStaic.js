const fs = require('fs')
const path = require('path')
const mime = require('mime')

function myReadFile(file) {
  return new Promise((resolve,rejects)=>{
    fs.readFile(file,(err,data)=>{
      if(err){
        console.log(00000);
        resolve('访问错误')
      }else{
        resolve(data)
      }
    })
  })

  // return fs.readFileSync(file)
}


async function readStaicFile(pathName) { //读取静态文件
  let ext = path.parse(pathName).ext  //获取拓展名
  let mimeType = mime.getType(ext) || 'text/html'  //拓展名对应的类型
  let data

  if(fs.existsSync(pathName)){  //文件是否存在
    if(ext){//是个文件
      data = await myReadFile(pathName)
    }else{//是目录，取下面的默认页面
        data = await myReadFile(path.join(pathName,'index.html'))
    }
  }else{
    data = '文件不存在下下jjjjj'
  }
  return {
    mimeType,
    data
  }
}

module.exports = readStaicFile
