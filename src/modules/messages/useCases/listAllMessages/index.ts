import { MessagesRepository } from '../../repositories/implementations/MessagesRepository';

import { ListAllMessagesUseCase } from './ListAllMessagesUseCase';
import { ListAllMessagesController } from './ListAllMessagesController';

const messagesRepository = MessagesRepository.getInstance();

const listAllMessagesUseCase = new ListAllMessagesUseCase(messagesRepository);

const listAllMessagesController = new ListAllMessagesController(listAllMessagesUseCase);

export { listAllMessagesController };