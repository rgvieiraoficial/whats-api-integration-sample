import { FastifyInstance } from 'fastify';

import { messagesRoutes } from './messages.routes';
import { whatsappRoutes } from './whatsapp.routes';

async function appRoutes(fastify: FastifyInstance) {
  fastify.register(messagesRoutes, { prefix: '/messages' });
  fastify.register(whatsappRoutes, { prefix: '/whatsapp' });
};

export { appRoutes };