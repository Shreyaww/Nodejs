const emitter = require('./sendEmail')  // importing custom module within the same folder

emitter.on('emailEvent', (message) =>{
    console.log(`Email : ${message}`)
})

//trigger an event by using the emit method and we can pass arbitrary arguments to listen in the event
emitter.emit('emailEvent', 'Send activation email to user after registration')