import { ListAllMessagesWebSocketUseCase } from './ListAllMessagesWebSocketUseCase';

class ListAllMessagesWebSocketController {

  constructor(private listAllMessagesWebSocketUseCase: ListAllMessagesWebSocketUseCase) { }

  async handle(socket: any, data: any): Promise<void> {
    const messages = await this.listAllMessagesWebSocketUseCase.execute();

    return socket.emit('allMessages', messages);
  }
}

export { ListAllMessagesWebSocketController };