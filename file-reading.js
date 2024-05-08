const fs = require("fs");

fs.readdir('.', (err, content)=>{
    if(err){
        throw err;
    }

    console.log(content);
})

fs.readFile('execute.js', 'utf-8', (err, content)=>{
    console.log(content)
})