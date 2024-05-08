const execute = require('child_process').exec; // exec is a function inside child_process

execute("dir", (err, stdout)=>{

    if(err){
        return err;
    }

    console.log(stdout);
})