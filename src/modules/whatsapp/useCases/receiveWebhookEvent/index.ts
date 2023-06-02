import { ContactsRepository } from '../../repositories/implementations/ContactsRepository';
import { MessagesRepository } from '../../../messages/repositories/implementations/MessagesRepository'
import { SocketServer } from '../../../../socketServer';

import { ReceiveWebhookEventUseCase } from './ReceiveWebhookEventUseCase';
import { ReceiveWebhookEventController } from './ReceiveWebhookEventController';


const contactsRepository = ContactsRepository.getInstance();
const messagesRepostiroy = MessagesRepository.getInstance();
const socketServer = SocketServer.getInstance();

const receiveWebhookEventUseCase = new ReceiveWebhookEventUseCase(contactsRepository, messagesRepostiroy, socketServer);

const receiveWebhookEventController = new ReceiveWebhookEventController(receiveWebhookEventUseCase);

export { receiveWebhookEventController };