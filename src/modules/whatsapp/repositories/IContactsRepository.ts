import { Contact } from '../entities/Contact';

interface ICreateContactDTO {
  name: string;
  phone_number_id: number;
  whatsapp_number: number;
  avatar: string;
}

interface IContactsRepository {
  create({ name, phone_number_id, whatsapp_number, avatar }: ICreateContactDTO): Promise<Contact>;
  findByPhoneNumberId(phone_number_id: number): Promise<Contact>;
  list(): Promise<Contact[]>;
}

export { IContactsRepository, ICreateContactDTO };