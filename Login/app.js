const express = require('express')
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const User = require('./models/User');
const bcrypt = require('bcryptjs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

//mongoose.connect: This is a function provided by the Mongoose library used for connecting to a MongoDB
// database.
//'mongodb://localhost/login': This is the connection string that specifies the following details:
//Protocol: mongodb:// indicates it's a connection to a MongoDB server.
// Host: localhost refers to the MongoDB server running on the same machine as this code.
// Database: login specifies the name of the database you want to connect to.
mongoose.connect('mongodb://localhost/login')

mongoose.connection
    .once('open', () => console.log('CONNECTED')) // when connection to db is open 
    .on('error', (err) => {
        console.log(`Could not Connect`, err)
    })


app.post('/register', (req, res) => {
    const newUser = new User();

    newUser.email = req.body.email;
    newUser.password = req.body.password;

    //res.send(newUser)

    //10: This is the cost factor, which controls how computationally intensive it is to generate the hash. A higher value makes it more secure but takes longer to compute.
    //salt is combined with the password before hashing, making the resulting hash unique for each user even if they have the same password
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) return err;

            newUser.password = hash;

            newUser.save()
                .then(dataSaved => {
                    res.send("User data saved")
                })
                .catch(err => {
                    res.status(404).send('USER NOT SAVED BECAUSE ', err)
                });


        });
    });


});


app.post('/login', (req, res) => {
    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            bcrypt.compare(req.body.password, user.password, (err, matched) => {

                if (err) return err;

                if (matched) {
                    res.send(`Welcome ${req.body.email}`)
                }
                else {
                    res.send("Wrong Password")
                }
            })
        }
    })
})



//Start Server: We use app.listen(port, () => {...})
// to start the server and listen for incoming requests on the specified port.
//The second argument is a callback function that gets executed when the server starts successfully.
app.listen(3244, () => {
    console.log('Listening on Port 3244')
});