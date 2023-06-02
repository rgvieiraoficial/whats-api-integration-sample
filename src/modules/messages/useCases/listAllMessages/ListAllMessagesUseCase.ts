import { IMessagesRepository } from '../../repositories/IMessagesRepository';

class ListAllMessagesUseCase {

  constructor(
    private messagesRepository: IMessagesRepository
  ) { }

  async execute() {
    const messages = await this.messagesRepository.list();

    return messages;
  }
}

export { ListAllMessagesUseCase };