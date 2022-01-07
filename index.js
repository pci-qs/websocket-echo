'use strict';

const express = require('express');
const path = require('path');
const { createServer } = require('http');
const WebSocket = require('ws');

const app = express();
app.use(express.static(path.join(__dirname, '/public')));

const server = createServer(app);
server.listen(8080, function () {
  console.log('Listening on http://localhost:8080');
});

// const wss = new WebSocket.Server({ server });
// wss.on('connection', function (ws) {
//   console.log('Client connected');
//   ws.on('message', function message(data, isBinary) {
//     console.log('received: %s', data);
//     ws.send(data, { binary: isBinary });
//   });

//   ws.send('Connected');
//   ws.on('close', function () {
//     console.log('Client disconnected');
//   });
// });
