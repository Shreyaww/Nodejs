const https = require('https');
const fs = require('fs');

const url = 'https://jsonplaceholder.typicode.com/posts';

https.get(url, (res) =>{ // res is an event here which will be emitted when url sends a response
    res.setEncoding('utf-8');

    let body = '';

    res.on('data', data =>{
        body += data;
    })

    res.on('end', ()=>{
        body = JSON.parse(body);

        console.log(`
            ${body[0].title} 
        `)
        // fs.writeFile('data.json', body, 'utf-8', (err) =>{
        //     if(err) console.log(err);

        //     console.log("The file has been saved and we just pulled all the posts");
        // })
    })
});
