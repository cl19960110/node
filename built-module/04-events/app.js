const Event = require('events')//事件触发器
class MYEvent extends Event{

}

const event = new MYEvent()

event.on('play',(val)=>{  //监听事件
  console.log(val);
})
event.once('play2',(val)=>{  //once只触发一次
  console.log(val);
})

event.emit('play','6666') //触发事件
event.emit('play','6666') //触发事件
event.emit('play2','2222') //触发事件
event.emit('play2','2222') //触发事件
