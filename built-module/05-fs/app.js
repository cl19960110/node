const fs = require('fs')
const fsPromises = require('fs').promises;

// fs.mkdir('logs',(err)=>{
//   if(err){
//     throw err
//   }
//   console.log('创建文件夹');
// })

// fs.writeFile('./logs/log.txt','一个文件',function(error){
//   console.log('写入文件');
// })

// fs.appendFile('./logs/log.txt','？？',(err)=>{
//   console.log('追加内容');
// })

// fs.rename('./logs','./log',()=>{
//   console.log('修改文件夹名称');
// })

// fs.rmdir('./log',()=>{
//   console.log('删除文件夹');
// })

// fs.unlink('./logs/a.txt',()=>{
//   console.log('删除文件');
// })

// fs.readdir('./logs',(err,res)=>{//查询文件夹中的内容
//   console.log(res);
// })

// fs.readFile('./logs/log.txt','utf-8',(err,data)=>{
//   console.log(data,'读取文件内容');
// })

// const data = fs.readFileSync('./logs/log.txt','utf-8')  //都可以加上Sync进行同步操作
// console.log(data,'data');
// console.log('999999');

// (async()=>{
//    let data = await fsPromises.readFile('./logs/log.txt','utf-8')
//   console.log(data);
// })()

// for (let index = 0; index < 10; index++) { //循环写入文件
//   fs.writeFile(`./logs/${index}.txt`,`${index}的内容`,()=>{
//   })
// }

/**
 * 递归读取某个目录下的所有文件内容
 */
// function logDir(dir) {
//     fs.readdir(dir,(err,data)=>{//查询目录下的内容
//       data.forEach(item => {//遍历内容
//           fs.stat(`${dir}/${item}`,(err,stats)=>{//stat可以查询是否为目录
//             if(stats.isDirectory()){//是一个目录
//               logDir(`${dir}/${item}`)//递归
//             }else{//读出内容
//               fs.readFile(`${dir}/${item}`,'utf-8',(err,main)=>{
//                 console.log(main,'读取文件内容');
//               })
//             }
//           })
//       });
//     })
// }
// logDir('./')

/**
 * watchc存在一些兼容问题，推荐使用watchFile
 */
fs.watchFile('./logs/0.txt',(err)=>{
  console.log('change');
})



