const http = require('http');
const fs = require('fs');

http.createServer((req, res) =>{
    let body = '';

    if(req.method == 'GET'){
        console.log(req.method);
// res: This is the response object that is used to send data back to the client (the browser in this case).
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.readFile('./form.html', 'utf-8', (err, data) =>{
            if(err) throw err;

            res.write(data);

            res.end();
        })
    }
    else if (req.method == 'POST'){
        // adding an event listener 
        req.on('data', data =>{
            body += data;
        })

        req.on('end', () =>{
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.write(body, () =>{
                res.end();
            })
        })
    }
    else{
        res.writeHead(404, {'Content-Type' : 'text/plain'});
        res.end("404 ERROR")
    }
}).listen(4444);

console.log("It's working")