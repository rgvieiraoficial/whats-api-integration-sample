import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import { listAllUsersController } from '../modules/users/useCases/listAllUsers';

async function usersRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get('/list', (request, reply) => {
    listAllUsersController.handle(request, reply);
  });
}

export { usersRoutes };