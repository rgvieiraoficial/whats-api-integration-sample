import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import { listAllMessagesWebSocketController } from '../modules/messages/useCases/istaAllMessagesWebSocket';

async function socketRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get('/', { websocket: true }, (connection, request) => {
    console.log('New connection');

    connection.socket.on('getAllMessages', message => {
      listAllMessagesWebSocketController.handle(connection, request);
    });
  });
}

export { socketRoutes };