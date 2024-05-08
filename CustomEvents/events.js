const events = require('events');

let emitter = new events.EventEmitter();

// creating a custom event
emitter.on('newEvent', (message) =>{
    console.log(`Message : ${message}`)
})

emitter.emit('newEvent', "New User Registered named Shreya Singh"); // calling the event 