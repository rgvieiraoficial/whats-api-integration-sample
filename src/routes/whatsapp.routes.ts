import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import { receiveMessageWebhookController } from '../modules/whatsapp/useCases/receiveMessageWebhook';
import { verifyWebhookController } from '../modules/whatsapp/useCases/verifyWebhook';

async function whatsappRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get('/webhook', (request, reply) => {
    verifyWebhookController.handle(request, reply);
  });

  fastify.post('/webhook', (request, reply) => {
    receiveMessageWebhookController.handle(request, reply);
  });
}

export { whatsappRoutes };