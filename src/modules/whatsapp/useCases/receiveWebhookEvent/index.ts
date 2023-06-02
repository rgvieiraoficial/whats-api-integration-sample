import { ContactsRepository } from '../../repositories/implementations/ContactsRepository';
import { MessagesRepository } from '../../../messages/repositories/implementations/MessagesRepository'

import { ReceiveWebhookEventUseCase } from './ReceiveWebhookEventUseCase';
import { ReceiveWebhookEventController } from './ReceiveWebhookEventController';

const contactsRepository = ContactsRepository.getInstance();
const messagesRepostiroy = MessagesRepository.getInstance();

const receiveWebhookEventUseCase = new ReceiveWebhookEventUseCase(contactsRepository, messagesRepostiroy);

const receiveWebhookEventController = new ReceiveWebhookEventController(receiveWebhookEventUseCase);

export { receiveWebhookEventController };