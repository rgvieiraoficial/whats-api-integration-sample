import { Message } from '../entities/Message';

interface ICreateMessageDTO {
  user_id: string;
  contact_id: string;
  content: string;
  position: string;
  whatsapp_message_id: string;
}

interface IMessagesRepository {
  create({ user_id, contact_id, content, position, whatsapp_message_id }: ICreateMessageDTO): Promise<Message>;
  list(): Promise<Message[]>;
}

export { IMessagesRepository, ICreateMessageDTO };