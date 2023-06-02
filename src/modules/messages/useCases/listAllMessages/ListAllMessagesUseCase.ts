import { IMessageRepository } from '../../repositories/IMessageRepository';

class ListAllMessagesUseCase {

  constructor(
    private messagesRepository: IMessageRepository
  ) { }

  async execute() {
    const messages = await this.messagesRepository.list();

    return messages;
  }
}

export { ListAllMessagesUseCase };