const express = require('express')
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());

//This line configures Express to parse URL-encoded request bodies (the format used by HTML
// forms by default) with a false value for the extended option. This means it will only handle
// simple data types like strings, arrays, and objects without nested structures.
app.use(bodyParser.urlencoded({extended : false}))

//This line tells Express to serve static files (like HTML, CSS, JavaScript, or images) from
//the public directory whenever a request starts with the /assets path. For example, a request 
//to /assets/style.css will be served from the public/style.css file.
app.use('/assets', express.static(__dirname + '/public'));

app.use((req, res, next) => {

    console.log('MIDDLEWARE');
    next();

});

app.post('/post', (req, res) =>{
    //console.log(`Body : ${req.body.email}`);
    console.log(req.body);
})

app.listen(7878);

console.log("It's working");