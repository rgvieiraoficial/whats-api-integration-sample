import { FastifyRequest, FastifyReply } from 'fastify';

import { ListAllUsersUseCase } from './ListAllUsersUseCase';

class ListAllUsersController {

  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  async handle(request: FastifyRequest, reply: FastifyReply) {
    const users = await this.listAllUsersUseCase.execute();

    return reply.status(200).send({ users: 'All Users' });
  }
}

export { ListAllUsersController };