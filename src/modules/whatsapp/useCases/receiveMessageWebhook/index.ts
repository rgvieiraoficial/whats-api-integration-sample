import { ReceiveMessageWebhookUseCase } from './ReceiveMessageWebhookUseCase';
import { ReceiveMessageWebhookController } from './ReceiveMessageWebhookController';

const receiveMessageWebhookUseCase = new ReceiveMessageWebhookUseCase();
const receiveMessageWebhookController = new ReceiveMessageWebhookController(receiveMessageWebhookUseCase);

export { receiveMessageWebhookController };