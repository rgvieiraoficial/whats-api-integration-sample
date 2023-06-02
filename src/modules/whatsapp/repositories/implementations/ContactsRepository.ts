import { Contact } from '../../entities/Contact';
import { IContactsRepository, ICreateContactDTO } from '../IContactsRepository';

class ContactsRepository implements IContactsRepository {
  private contacts: Contact[];

  private static INSTANCE: ContactsRepository;

  private constructor() {
    this.contacts = [];
  }

  public static getInstance(): ContactsRepository {
    if (!ContactsRepository.INSTANCE) {
      ContactsRepository.INSTANCE = new ContactsRepository();
    }

    return ContactsRepository.INSTANCE;
  }

  async create({ name, phone_number_id, whatsapp_number, avatar }: ICreateContactDTO) {
    const contact = new Contact();

    Object.assign(contact, {
      name,
      phone_number_id,
      whatsapp_number,
      avatar,
      created_at: new Date()
    });

    this.contacts.push(contact);

    return contact;
  }

  async findByPhoneNumberId(phone_number_id: number): Promise<Contact> {
    const contact = this.contacts.find((contact) => contact.phone_number_id === phone_number_id);

    return contact;
  }

  async list(): Promise<Contact[]> {
    const contacts = this.contacts;

    return contacts;
  }
}

export { ContactsRepository };