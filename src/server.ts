/**
 * M2ChatAI
 * ------------------
 * License : Dual License
 *           - Apache 2.0 for open-source / personal use
 *           - Commercial license required for closed-source use
 * Author  : Md Mahbubur Rahman
 * URL     : https://m-a-h-b-u-b.github.io
 * GitHub  : https://github.com/m-a-h-b-u-b/M2ChatAI
 */

import express from 'express';
import http from 'http';
import { Server as SocketIOServer } from 'socket.io';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import chatRoutes from './routes/chat';

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();
app.use(express.json());

// API routes
app.use('/api/chat', chatRoutes);

// Create HTTP server and bind Socket.io
const server = http.createServer(app);
const io = new SocketIOServer(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

// WebSocket events
io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on('message', (msg) => {
    console.log('Message received:', msg);
    io.emit('message', msg);
  });

  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

// Start server after DB connection
const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to start server:', err);
  });
