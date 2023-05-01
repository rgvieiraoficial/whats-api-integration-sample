import { FastifyReply, FastifyRequest } from 'fastify';

import { ReceiveMessageWebhookUseCase } from './ReceiveMessageWebhookUseCase';

interface IRequestBody {
  entry: [
    {
      changes: [
        {
          value: {
            metadata: {
              phone_number_id: number
            },
            messages: [
              {
                from: string,
                text: {
                  body: string
                }
              }
            ]
          }
        }
      ]
    }
  ];
}

class ReceiveMessageWebhookController {

  constructor(private receiveMessageWebhook: ReceiveMessageWebhookUseCase) { }

  async handle(request: FastifyRequest, reply: FastifyReply) {
    const requestBody = request.body as IRequestBody;

    const phone_number_id = requestBody.entry[0].changes[0].value.metadata.phone_number_id;

    const from = Number(requestBody.entry[0].changes[0].value.messages[0].from); //extract the phone number from the webhook payload

    console.log(requestBody.entry[0].changes[0].value.messages);

    const message = requestBody.entry[0].changes[0].value.messages[0].text.body; // extract the message text from the webhook payload

    await this.receiveMessageWebhook.execute({ phone_number_id, from, message });

    reply.status(200).send();
  }
}

export { ReceiveMessageWebhookController };