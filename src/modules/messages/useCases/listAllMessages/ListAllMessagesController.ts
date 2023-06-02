import { FastifyReply, FastifyRequest } from 'fastify';

import { ListAllMessagesUseCase } from './ListAllMessagesUseCase';

class ListAllMessagesController {

  constructor(private listAllMessagesUseCase: ListAllMessagesUseCase) { }

  async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const messages = this.listAllMessagesUseCase.execute();

    return reply.status(200).send({ messages });
  }
}

export { ListAllMessagesController };