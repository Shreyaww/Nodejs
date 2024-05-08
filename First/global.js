var path = require('path')

console.log("Hello from node") // gets saved in global object. var also gets stored in global objects but not let

var name = "Shreya"

global.console.log(`newName is ${name}`)

console.log(__dirname)

console.log(__filename)

console.log(path.basename(__filename ))
