const events = require('events');

let emitter = new events.EventEmitter();

module.exports = emitter;   // exporting data, module object in this case