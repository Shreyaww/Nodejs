const http = require('http');
const fs = require('fs')

http.createServer((req,res) =>{

    console.log(req.method);

    if(req.url == '/'){ // req.url == '/about'
        fs.readFile('server.js', 'utf-8', (err, data) =>{
            res.writeHead(200, {'Content-Type' : "text/html"})
            res.end(data)
        })
    }
    else if(req.url == '/about'){ // req.url == '/about'
        fs.readFile('data.json', 'utf-8', (err, data) =>{
            res.writeHead(200, {'Content-Type' : "text/html"})
            res.end(data)
        })
    }
    else{
        res.writeHead(404, {'Content-Type' : "text/plain"})
        res.end('404 Error Could not find data')
    }

}).listen(3333);

console.log("Listening to port 3333")