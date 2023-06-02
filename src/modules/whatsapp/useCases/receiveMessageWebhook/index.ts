import { ContactsRepository } from '../../repositories/implementations/ContactsRepository';
import { MessageRepository } from '../../../messages/repositories/implementations/MessageRepository'

import { ReceiveMessageWebhookUseCase } from './ReceiveMessageWebhookUseCase';
import { ReceiveMessageWebhookController } from './ReceiveMessageWebhookController';

const contactsRepository = ContactsRepository.getInstance();
const messageRepostiroy = MessageRepository.getInstance();

const receiveMessageWebhookUseCase = new ReceiveMessageWebhookUseCase(contactsRepository, messageRepostiroy);

const receiveMessageWebhookController = new ReceiveMessageWebhookController(receiveMessageWebhookUseCase);

export { receiveMessageWebhookController };