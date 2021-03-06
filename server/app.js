const app = require('express');
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('client connected');
  socket.on('send', (payload) => {
    console.log(payload);
    socket.broadcast.emit('broadcast', payload);
  });
  socket.on('disconnect', () => {
    console.log('connection closed');
  });
});

server.listen(3001, () => {
  console.log('server listening...');
});
