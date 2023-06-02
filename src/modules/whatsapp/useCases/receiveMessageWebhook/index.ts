import { ContactsRepository } from '../../repositories/implementations/ContactsRepository';
import { ReceiveMessageWebhookUseCase } from './ReceiveMessageWebhookUseCase';
import { ReceiveMessageWebhookController } from './ReceiveMessageWebhookController';

const contactsRepository = ContactsRepository.getInstance();

const receiveMessageWebhookUseCase = new ReceiveMessageWebhookUseCase(contactsRepository);

const receiveMessageWebhookController = new ReceiveMessageWebhookController(receiveMessageWebhookUseCase);

export { receiveMessageWebhookController };