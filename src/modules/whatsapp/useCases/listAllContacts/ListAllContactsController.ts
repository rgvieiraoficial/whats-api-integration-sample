import { FastifyReply, FastifyRequest } from 'fastify';

import { ListAllContactsUseCase } from './ListAllContactsUseCase';

class ListAllContactsController {

  constructor(private listAllContactsUseCase: ListAllContactsUseCase) { }

  async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const contacts = this.listAllContactsUseCase.execute();

    return reply.status(200).send({ contacts });
  }
}

export { ListAllContactsController };