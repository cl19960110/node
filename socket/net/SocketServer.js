// const net = require('net')

// const server = net.createServer((socket) => {
//   // socket.end('再见\n');
//   socket.write('hello')

//   socket.on('data', (chunk) => {
//     console.log(chunk.toString(),'chunk');
//   });

// })

// server.on('error', (err) => {
//   // 处理错误
//   throw err;
// });

// // 获取任意未使用的端口。
// server.listen(9527,() => {
//   console.log('open FWQ', server.address());
// });


const net = require('net')

const server = new net.createServer()

let clients = {}
let clientName = 0

server.on('connection', (client) => {
  client.name = ++clientName
  clients[client.name] = client

  client.on('data', (msg) => {
    // console.log('客户端传来：' + msg);
    broadcast(client, msg.toString())
  })

  client.on('error', (e) => {
    console.log('client error' + e);
    client.end()
  })

  client.on('close', (data) => {
    delete clients[client.name]
    console.log(client.name + ' 下线了');
  })
})

function broadcast(client, msg) {
  for (var key in clients) {
    if(client.name != key){
      clients[key].write(client.name + ' 说：' + msg)
    }
  }
}

server.listen(9527, 'localhost')
