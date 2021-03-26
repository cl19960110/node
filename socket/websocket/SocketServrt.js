const webSocket = require('ws')

const wss = new webSocket.Server({port:9527})

wss.on('connection',function connection(ws) { //监听connection（连接）事件

    ws.on('message',function incoming(data){ //ws监听message事件（接收到数据）
      wss.clients.forEach(function each(client) { //进行广播
        if(client.readyState === webSocket.OPEN){
          client.send(data)
        }
      })
    })
})




