import { IMessagesRepository } from '../../repositories/IMessagesRepository';

class ListAllMessagesWebSocketUseCase {

  constructor(
    private messagesRepository: IMessagesRepository
  ) { }

  async execute() {
    const messages = await this.messagesRepository.list();

    return messages;
  }
}

export { ListAllMessagesWebSocketUseCase };