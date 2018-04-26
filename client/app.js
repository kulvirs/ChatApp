var socket = io();

$('form').on('submit',function(){
    var name = $('#initials').val()
    var text = $('#message').val();
    socket.emit('message',name+" says: "+text);
    $('#message').val('');
    return false;
});

socket.on('message',function(msg){
    $('<li>').text(msg).appendTo('#history');
});