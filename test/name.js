const name = {
  curname :'6666',
  sayname(){
    console.log(this.curname);
  }
}
const age = {
  age:100
}

// module.exports = {name,age}
exports.name = name
exports.age = age
