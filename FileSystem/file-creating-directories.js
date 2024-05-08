const fs = require('fs')

fs.access('./views', (error) => {
    if (error) {
        console.log("The folder does not exists")


        fs.mkdir('views', (error) => {
            if (error) {
                return error;
            }

            fs.writeFile("./views/new.txt", "This is a file inside views folder", 'utf-8', (err) => {
                if (err) return err;

                console.log("The file has been saved.");
            })
        })
    }
})