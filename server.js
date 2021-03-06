var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

app.use(express.static('client'));

var io = require('socket.io')(server);
var arr = [];
var port = process.env.PORT || 8080;

io.on('connection',function(socket){
    for (i = 0; i < arr.length; i++){
        socket.emit('message',arr[i]);
    }
    socket.on('message',function(msg){
        arr.push(msg);
        io.emit('message',msg);
    });
});

server.listen(port,function(){
   console.log('Chat server running'); 
});