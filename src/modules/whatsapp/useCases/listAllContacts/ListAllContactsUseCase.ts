import { IContactsRepository } from '../../repositories/IContactsRepository';

class ListAllContactsUseCase {

  constructor(
    private contactsRepository: IContactsRepository
  ) { }

  async execute() {
    const contacts = await this.contactsRepository.list();

    return contacts;
  }
}

export { ListAllContactsUseCase };