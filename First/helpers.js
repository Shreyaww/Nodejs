// exports is used to export data in node
module.exports.title = 'Node' // assigning Node title to the exports array which is present in the Module object

module.exports.title1 = 'Node1'

module.exports.title2 = function(){
    console.log("Hello")
}

console.log(module)

console.log(module.exports.title2())


const object = require('./lib')

console.log(object.cal(10,20))