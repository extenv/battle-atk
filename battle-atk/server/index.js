const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*'
  }
});

let rooms = {};

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('join-game', () => {
    let room = Object.keys(rooms).find(
      (key) => rooms[key].players.length < 2
    );

    if (!room) {
      room = `room-${Date.now()}`;
      rooms[room] = { players: [] };
    }

    rooms[room].players.push(socket.id);
    socket.join(room);

    socket.emit('joined', { room, playerId: socket.id });
    console.log(`User ${socket.id} joined ${room}`);

    if (rooms[room].players.length === 2) {
      io.to(room).emit('start-game', {
        players: rooms[room].players
      });
    }

    socket.on('attack', (data) => {
      socket.to(room).emit('attacked', data);
    });

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
      rooms[room].players = rooms[room].players.filter(id => id !== socket.id);
      io.to(room).emit('opponent-left');
    });
  });
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
