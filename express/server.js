const express = require('express')
const path = require('path')
const router = require('./router')

const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json())

app.use(express.static('./public'))

app.engine('art', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production',
    escape:false
});
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'art');


app.use('/',router)



app.listen(8080,()=>{
  console.log(8080);
})
