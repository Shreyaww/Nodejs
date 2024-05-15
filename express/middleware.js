const express = require('express');
let app = express();


app.use('/css', express.static(__dirname + '/public'));

//Middleware gets executed after the server receives the request and before the controller 
// actions send the response
app.use((req, res, next) => {

    console.log('MIDDLEWARE');
    next();

});

app.get('/', (req, res) => {

    //res.send("HOME");

    res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>
    <h1>IDK WHAT AM I DOING HERE</h1>
</body>
</html>
    `)

})

app.listen(7878);

console.log("It's working");