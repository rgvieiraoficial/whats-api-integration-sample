import { MessageRepository } from '../../repositories/implementations/MessageRepository';

import { ListAllMessagesUseCase } from './ListAllMessagesUseCase';
import { ListAllMessagesController } from './ListAllMessagesController';

const messageRepository = MessageRepository.getInstance();

const listAllMessagesUseCase = new ListAllMessagesUseCase(messageRepository);

const listAllMessagesController = new ListAllMessagesController(listAllMessagesUseCase);

export { listAllMessagesController };