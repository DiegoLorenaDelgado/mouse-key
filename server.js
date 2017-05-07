//server.js
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var robot = require("robotjs");

io.on('connection', function (socket){
   console.log('connection');

  socket.on('CH01', function (from, x, y) {
    console.log('DE:', from, ' dizendo: ', x + y);
    robot.moveMouse(x, y);
  });

});

http.listen(3000, function () {
  console.log('listening on *:3000');
});
