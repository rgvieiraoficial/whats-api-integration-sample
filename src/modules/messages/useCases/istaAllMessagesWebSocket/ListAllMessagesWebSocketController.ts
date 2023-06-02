import { FastifyRequest } from 'fastify';
import { SocketStream } from '@fastify/websocket';

import { ListAllMessagesWebSocketUseCase } from './ListAllMessagesWebSocketUseCase';

class ListAllMessagesWebSocketController {

  constructor(private listAllMessagesWebSocketUseCase: ListAllMessagesWebSocketUseCase) { }

  async handle(connection: SocketStream, request: FastifyRequest): Promise<void> {
    const messages = await this.listAllMessagesWebSocketUseCase.execute();

    connection.socket.send({ messages });
  }
}

export { ListAllMessagesWebSocketController };