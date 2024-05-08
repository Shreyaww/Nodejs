const fs =require('fs')

try {
    fs.unlinkSync('./newdir/newfile.js');

    fs.rmdir('./newDir', (err) =>{
        if(err){
            console.log("something went wrong" + err)
        }
    })
}
catch(err){
    console.log(err + "This is the error occuring");
}
