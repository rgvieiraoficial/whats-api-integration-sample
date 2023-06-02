import { FastifyInstance } from 'fastify';

import { messagesRoutes } from './messages.routes';
import { socketRoutes } from './socket.routes';
import { whatsappRoutes } from './whatsapp.routes';

async function appRoutes(fastify: FastifyInstance) {
  fastify.register(messagesRoutes, { prefix: '/messages' });
  fastify.register(socketRoutes, { prefix: '/socket.io' })
  fastify.register(whatsappRoutes, { prefix: '/whatsapp' });
};

export { appRoutes };