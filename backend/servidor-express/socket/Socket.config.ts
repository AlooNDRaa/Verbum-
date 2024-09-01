import { Server as SocketIOServer } from 'socket.io';
import { Server } from 'http';
import { handleChatMessage } from '../controllers/chatController/ChatController';

export const setupSocketIO = (server: Server) => {
  const io = new SocketIOServer(server, {
    cors: {
      origin: process.env.FRONTEND_URL,
    },
  });

  io.on('connection', (socket) => {
    console.log('Un cliente se ha conectado');

    socket.on('chat message', async (data) => {
      try {
        const message = await handleChatMessage(data);
        io.emit('chat message', message);
      } catch (error) {
        console.error('Error al manejar el mensaje: ', error);
      }
    });

    socket.on('disconnect', () => {
      console.log('Un cliente se ha desconectado');
    });
  });

  return io;
};
