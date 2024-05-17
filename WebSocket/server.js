const webSocketServer = require('ws').Server;
const WSS = new webSocketServer({ port: 3232 });

//the argument ws represents the newly created WebSocket connection object. This object
// provides methods for sending and receiving messages over the established WebSocket connection.

//This line sets up an event listener for the connection event. Whenever a new WebSocket connection
// is established with a client, the provided function is executed. The argument ws represents the 
//newly created WebSocket connection object. This object provides methods for sending and receiving 
//messages over the established connection.
WSS.on('connection', (ws) => {

    //This line sets up an event listener for the message event on the ws (WebSocket connection object).
    // Whenever the client sends a message through the WebSocket connection, this function is triggered.
    // The argument message represents the data received from the client (the message content).
    ws.on('message', (message) => {

        if (message == 'close') {
            ws.close();
        }
        else {
            //enables sending messages to all connected clients
            WSS.clients.forEach((client) => {
                client.send(message);
            });

            console.log(message);
        }


    });

    console.log('We are connected');

});