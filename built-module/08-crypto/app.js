const crypto = require('crypto')

const pass = 'abc123'

const hash = crypto
.createHash('sha1') //加密算法
.update(pass)       //要加密的数据
.digest('hex')      //返回的数据格式

console.log(hash);
