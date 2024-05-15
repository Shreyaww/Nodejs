const webSocketServer = require('ws').Server;
const WSS = new webSocketServer({port : 3232});

//the argument ws represents the newly created WebSocket connection object. This object
// provides methods for sending and receiving messages over the established WebSocket connection.
WSS.on('connection', (ws) =>{

    console.log('We are connected');

});