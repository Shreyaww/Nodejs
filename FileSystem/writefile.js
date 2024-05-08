const fs = require('fs');

fs.writeFile('data.html', "Hello this file has just been created. \n", 'utf-8', (err)=>{
    if(err) return err;

    console.log("The file has been saved.");
})

fs.appendFile('data.html', "Extra data appended to this file using append function.", 'utf-8', (err)=>{
    if(err) return err;

    console.log("The file has been updated.");
})