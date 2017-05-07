//client.js
var io = require('socket.io-client');
var robot = require("robotjs");
var socket = io.connect('http://192.168.0.24:3000', {reconnect: true});
var timeout = 100;


// Add a connect listener
socket.on('connect', function (socket) {
    console.log('Connected!');
});

setInterval(function() {
  var mouse = robot.getMousePos();
  socket.emit('CH01', 'Eu', mouse.x, mouse.y);
}, timeout);
