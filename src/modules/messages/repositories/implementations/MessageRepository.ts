import { Message } from 'modules/messages/entities/Message';
import { ICreateMessageDTO, IMessageRepository } from '../IMessageRepository';

class MessageRepository implements IMessageRepository {
  private messages: Message[] = [];

  private static INSTANCE: MessageRepository;

  private constructor() {
    this.messages = [];
  }

  public static getInstance(): MessageRepository {
    if (!MessageRepository.INSTANCE) {
      MessageRepository.INSTANCE = new MessageRepository();
    }

    return MessageRepository.INSTANCE;
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

    return message;
  }

  async list(): Promise<Message[]> {
    const messages = this.messages;

    return messages;
  }
}

export { MessageRepository }