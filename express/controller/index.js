
var template = require('art-template');
const path = require('path')
const fa = require('fs')
const data = require('../model/list')



const list = (req,res,next)=>{

  // res.set('Content-Type','application/json;charset=utf-8')

  // res.render('list',{
  //   data: JSON.stringify(dataArr)
  // })


  // res.render('list-html.art',{
  //   data: dataArr
  // })

  var html = template(path.join(__dirname , '../view/list-html.art'), {
    data

  });

fa.writeFileSync(path.join(__dirname , '../public/list.html'),html)



  console.log(html);



  res.send('OKAY')
}
exports.list = list
