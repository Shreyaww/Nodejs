const express = require('express');

let app = express();

app.get('/', (req, res) =>{
    res.send('<h1> Hello. This is the home route</h1>')
});

app.get('/post/:id/category/:c_id', (req, res) =>{
    res.send(`
        <p> Here is ${req.params.id} </p>

        <p> Here is ${req.params.c_id} </p>
    `)
});


app.listen(7878);

console.log("It's working");