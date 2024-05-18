const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/animals');

mongoose.connection
.once('open', () => console.log('CONNECTED')) //.once() method on the connection object. It listens for the "open" event once, which occurs when the connection is successfully established.
.on('error', (err) =>{
    console.log(`Could not connect` , err);
})