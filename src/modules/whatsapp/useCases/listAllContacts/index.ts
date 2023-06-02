import { ContactsRepository } from '../../repositories/implementations/ContactsRepository';

import { ListAllContactsUseCase } from './ListAllContactsUseCase';
import { ListAllContactsController } from './ListAllContactsController';

const contactsRepository = ContactsRepository.getInstance();

const listAllContactsUseCase = new ListAllContactsUseCase(contactsRepository);

const listAllContactsController = new ListAllContactsController(listAllContactsUseCase);

export { listAllContactsController };