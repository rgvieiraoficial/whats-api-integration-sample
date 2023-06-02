
import { Server } from 'socket.io';

import { listAllMessagesWebSocketController } from './modules/messages/useCases/listAllMessagesWebSocket'

class SocketServer {
  private io: Server;

  private static INSTANCE: SocketServer;

  constructor() {
    const port = Number(process.env.WS_PORT) || 3333;

    this.io = new Server(port, {
      cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
      },
    });
  }

  public static getInstance(): SocketServer {
    if (!SocketServer.INSTANCE) {
      SocketServer.INSTANCE = new SocketServer();
    }

    return SocketServer.INSTANCE;
  }

  public listen() {
    this.io.on('connection', (socket) => {
      console.log('Cliente conectado ao servidor Socket.IO');

      socket.on('getAllMessages', (message) => {
        console.log(message);

        listAllMessagesWebSocketController.handle(socket, message);
      });

      socket.on('disconnect', () => {
        console.log('Cliente desconectado do servidor Socket.IO');
      });
    });
  }

  public emit(event, data) {
    this.io.emit(event, data);
  }
}

export { SocketServer }