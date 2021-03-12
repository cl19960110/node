const logger = require('../utils/log')

const querystring = require('querystring')
const query = 'id=2&name=tongyi&from=北京'
const query2 = 'id:2/name:tongyi/from:北京'
const queryEscape = 'id%3D2%26name%3Dtongyi%26from%3D%E5%8C%97%E4%BA%AC'
const queryObj = {id:'2',name:'tongyi',from:'北京'}

// logger.debug(querystring.parse(query))
// logger.debug(querystring.parse(query2,'/',':'))
// logger.debug(querystring.stringify(queryObj,':','/'))
// logger.debug(querystring.unescape(queryEscape))
// logger.debug(querystring.escape(query))

const newQuery = querystring.stringify(queryObj,null,null,{
  encodeURIComponent(string){
    return querystring.unescape(string) //默认中文字符会进行编码，这样可进行解码
  }
})
logger.debug(newQuery)
