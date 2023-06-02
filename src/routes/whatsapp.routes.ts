import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import { listAllContactsController } from '../modules/whatsapp/useCases/listAllContacts';
import { receiveWebhookEventController } from '../modules/whatsapp/useCases/receiveWebhookEvent';
import { verifyWebhookController } from '../modules/whatsapp/useCases/verifyWebhook';

async function whatsappRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get('/contacts', (request, reply) => {
    listAllContactsController.handle(request, reply);
  });

  fastify.get('/webhook', (request, reply) => {
    verifyWebhookController.handle(request, reply);
  });

  fastify.post('/webhook', (request, reply) => {
    receiveWebhookEventController.handle(request, reply);
  });
}

export { whatsappRoutes };