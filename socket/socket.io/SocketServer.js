const express = require('express')
const app = express()
const http = require('http').createServer((app))
const io = require('socket.io')(http,{ cors: true })



app.get('/',(req,res)=>{
  // res.sendFile(__dirname + './index.html')
  res.send('hello')
})

io.on('connection',(socket)=>{
  console.log('连接');
  socket.broadcast.emit('hi')

   // 与客户端对应的接收指定的消息
   socket.on('receive', (data)=>{
     console.log(data);
    socket.broadcast.emit('message',data)
  });

})
http.listen(3000,'127.0.0.1',()=>{
  console.log('3000');
})
