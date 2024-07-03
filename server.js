const express = require('express');
const http = require('http');
const WebSocket = require('ws');
var bodyParser = require('body-parser')

// Create Express app
const app = express();
app.use(bodyParser.json());

// Create HTTP server using Express app
const server = http.createServer(app);

// Create WebSocket server alongside the HTTP server
const wss = new WebSocket.Server({ server });

// WebSocket server event handlers
wss.on('connection', ws => {
    console.log('WebSocket client connected');
    ws.send(JSON.stringify({ "Message": "Hello Client" }));
    ws.on('close', () => {
        console.log('WebSocket client disconnected');
    });
});

// Handle POST requests
app.post('/lpr', (req, res) => {
    // Send a message to WebSocket clients
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(req.body));
        }
    });
    res.send('Message sent to WebSocket clients\n');
});

// Start the HTTP server
const PORT = process.env.PORT || 5007;
server.listen(PORT, () => {
    console.log(`HTTP server listening on port ${PORT}`);
    console.log(`Web socket is listening on port ${PORT}`);
});
