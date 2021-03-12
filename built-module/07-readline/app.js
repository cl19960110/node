const readline = require('readline')

const rl = readline.createInterface({//创建一个接口
  input:process.stdin,
  outout:process.stdout
})

rl.question('How Are You',(answer)=>{//question进行提问，用户输入后执行回调
  console.log(`我的回答：${answer}`);
  rl.close()
})
