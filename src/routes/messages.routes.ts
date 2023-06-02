import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import { listAllMessagesController } from '../modules/messages/useCases/listAllMessages';


async function messagesRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get('/', (request, reply) => {
    listAllMessagesController.handle(request, reply);
  });
}

export { messagesRoutes };