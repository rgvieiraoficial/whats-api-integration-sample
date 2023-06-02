import { Message } from '../../entities/Message';
import { ICreateMessageDTO, IMessagesRepository } from '../IMessagesRepository';

class MessagesRepository implements IMessagesRepository {
  private messages: Message[] = [];

  private static INSTANCE: MessagesRepository;

  private constructor() {
    this.messages = [];
  }

  public static getInstance(): MessagesRepository {
    if (!MessagesRepository.INSTANCE) {
      MessagesRepository.INSTANCE = new MessagesRepository();
    }

    return MessagesRepository.INSTANCE;
  }

  async create({ user_id, contact_id, content, position }: ICreateMessageDTO): Promise<Message> {
    const message = new Message();

    Object.assign(message, {
      user_id,
      contact_id,
      content,
      position,
      status: 1
    });

    this.messages.push(message);

    return message;
  }

  async list(): Promise<Message[]> {
    const messages = this.messages;

    return messages;
  }
}

export { MessagesRepository }