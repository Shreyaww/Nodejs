const http = require('http');

//  function callbackFunction(req, res) {
     // Your code for handling the request and response goes here
// }
// const server = http.createServer(callbackFunction);

const server = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type' : 'text/html'});

    res.end(`<h1>Hii Guys! </h1>`);
});

server.listen(9111);

console.log("Our Server is Running")
//console.log(server)