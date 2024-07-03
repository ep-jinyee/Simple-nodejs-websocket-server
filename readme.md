## Simple web socket server

This example shows it's possible to run websocket and http server on the same port.

## How to run this

1. Make sure you install `node>=18.x` and `npm`
2. run `npm install`
3. run `npm run dev`

## How to use

1. You can modify the server port and the post endpoint in `server.js`
2. Use http client like Postman to send json payload to the endpoint in 1.
3. Your websocket client should connect to the port in 1
4. When a POST reqest is triggered, whatever data in the payload body (json) will be forwarded to client in 3. 