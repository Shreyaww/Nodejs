const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({

    email:{
        type : String,
        unique : true,
        require : true,
        trim : true,
        minlength : 5
    },

    password :{
        type : String,
        required : true,
        minlength : 7
    }
});

//module.exports: This is a special variable in Node.js modules that specifies what you want to make 
//available to other parts of your application that import this module.
// mongoose.model('users', userSchema): This part creates a Mongoose model and assigns it to the module.exports. Here's what happens:

// mongoose.model: This is a function provided by Mongoose that takes two arguments:
// 'users': This is the first argument, a string that defines the name you want to use for the model within your application. In this case, it's named "users".
// userSchema: This is the second argument, which should be a Mongoose schema object that defines the structure of your data. You likely defined this schema earlier in your code using const userSchema = new Schema(...).
module.exports = mongoose.model('users-login', userSchema);