import { MessagesRepository } from '../../repositories/implementations/MessagesRepository';

import { ListAllMessagesWebSocketUseCase } from './ListAllMessagesWebSocketUseCase';
import { ListAllMessagesWebSocketController } from './ListAllMessagesWebSocketController';

const messagesRepository = MessagesRepository.getInstance();

const listAllMessagesWebSocketUseCase = new ListAllMessagesWebSocketUseCase(messagesRepository);

const listAllMessagesWebSocketController = new ListAllMessagesWebSocketController(listAllMessagesWebSocketUseCase);

export { listAllMessagesWebSocketController };