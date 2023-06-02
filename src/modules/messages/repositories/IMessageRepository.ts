import { Message } from '../entities/Message';

interface ICreateMessageDTO {
  user_id: string;
  contact_id: string;
  content: string;
  position: string;
}

interface IMessageRepository {
  create({ user_id, contact_id, content, position }: ICreateMessageDTO): Promise<Message>;
  list(): Promise<Message[]>;
}

export { IMessageRepository, ICreateMessageDTO };