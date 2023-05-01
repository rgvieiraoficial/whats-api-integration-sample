import { FastifyInstance } from 'fastify';

import { usersRoutes } from './users.routes';

async function appRoutes(fastify: FastifyInstance) {
  fastify.register(usersRoutes, { prefix: '/users' });
};

export { appRoutes };