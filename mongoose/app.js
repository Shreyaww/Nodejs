const mongoose = require('mongoose');
const User = require('./models/User1');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect('mongodb://localhost:27017/mongoose');

mongoose.connection
    .once('open', () => console.log('CONNECTED')) // when connection to db is open 
    .on('error', (err) => {
        console.log(`Could not Connect`, err)
    })

app.get('/', (req, res) => {
    res.send('ROOT') // we can also send a complete html webpage using template strings here 
})

app.post('/users', (req, res) => {
    // const newUser = User({
    //     firstName: 'Abhishek',
    //     lastName: 'Singh',
    //     isActive: 1
    // })

    const newUser = User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        isActive: req.body.isActive
    })

    newUser.save()
        .then(dataSaved => {
            console.log('User saved successfully:', dataSaved)
            res.send("User data saved")
        })
        .catch(err => {
            console.error('Error saving user:', err)
            res.status(404).send('USER NOT SAVED BECAUSE ', err)
        });
})

app.get('/users', (req, res) => {
    User.find({}).then(users => {
        res.status(200).send(users);
    })
})


// patch is used when we want to update only one column - firstname in this case
// app.patch('/users/:id', (req, res) =>{
//     const id = req.params.id; //extracts the value of the id parameter from the URL and assigns it to the id variable.
//     const firstName = req.body.firstName; //retrieves the value of the firstName property from the request body 

//     // User.findByIdAndUpdate({_id : id}, { $set : {firstName : firstName}}, {new : true})
//     //     .then(savedUser =>{
//     //         res.send("USER UPDATED AND SAVED BY PATCH")
//     //     })


//     //{new: true} option ensures the updated document is returned.
//     User.findByIdAndUpdate(id, { $set : {firstName : firstName}}, {new : true})
//     .then(savedUser =>{
//         res.send("USER UPDATED AND SAVED BY PATCH")
//     })
// })


// app.put('/users/:id', (req, res) =>{
//     const id = req.params.id; 
//     const firstName = req.body.firstName;
//     const lastName = req.body.lastName;

//     User.findByIdAndUpdate(id, { $set : {firstName : firstName, lastName : lastName}}, {new : true})
//     .then(savedUser =>{
//         res.send("USER UPDATED AND SAVED BY PUT")
//     })
// })


app.put('/users/:id', (req, res) =>{
    const id = req.params.id; 
    
    User.findOne({_id : id})
    .then(User =>{
        User.firstName = req.body.firstName;
        User.lastName = req.body.lastName;

        User.save().then(UserSaved =>{
            res.send(UserSaved)
        })
    })
})

// app.delete('/users/:id', (req, res) =>{
//     const id = req.params.id; 
    
//     User.findOne({_id : id})
//     .then(User =>{
//         User.remove().then(userRemoved =>{
//             res.send('User Removed' + userRemoved)
//         });
//     })
// })

app.delete('/users/:id', (req, res) =>{
    const id = req.params.id; 
    
    User.findByIdAndDelete({_id : id})
    .then(UserRemoved =>{
        res.send(`User ${UserRemoved.firstName} removed`)
    })
})




// app.post('/users')

// const newUser = User({
//     firstName : 'Yashi',
//     lastName : ' Singh',
//     isActive : 1
// })

// newUser.save()
//   .then(dataSaved => console.log('User saved successfully:', dataSaved))
//   .catch(err => console.error('Error saving user:', err));


const port = 4444 || process.env.PORT;

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});