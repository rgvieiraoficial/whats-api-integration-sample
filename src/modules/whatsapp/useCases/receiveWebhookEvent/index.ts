import { ContactsRepository } from '../../repositories/implementations/ContactsRepository';
import { MessageRepository } from '../../../messages/repositories/implementations/MessageRepository'

import { ReceiveWebhookEventUseCase } from './ReceiveWebhookEventUseCase';
import { ReceiveWebhookEventController } from './ReceiveWebhookEventController';

const contactsRepository = ContactsRepository.getInstance();
const messageRepostiroy = MessageRepository.getInstance();

const receiveWebhookEventUseCase = new ReceiveWebhookEventUseCase(contactsRepository, messageRepostiroy);

const receiveWebhookEventController = new ReceiveWebhookEventController(receiveWebhookEventUseCase);

export { receiveWebhookEventController };