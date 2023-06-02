import { FastifyReply, FastifyRequest } from 'fastify';

import { ReceiveMessageWebhookUseCase } from './ReceiveMessageWebhookUseCase';

interface IRequestBody {
  entry: [
    {
      changes: [
        {
          value: {
            metadata: {
              phone_number_id: number;
            },
            contacts: [
              {
                profile: {
                  name: string;
                }
              }
            ],
            messages: [
              {
                from: string;
                text: {
                  body: string;
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

  async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const requestBody = request.body as IRequestBody;

    console.log(requestBody);

    const name = requestBody.entry[0].changes[0].value.contacts[0].profile.name;

    const phone_number_id = requestBody.entry[0].changes[0].value.metadata.phone_number_id;

    const from = Number(requestBody.entry[0].changes[0].value.messages[0].from); //extract the phone number from the webhook payload

    console.log(requestBody.entry[0].changes[0].value.messages);

    const message = requestBody.entry[0].changes[0].value.messages[0].text.body; // extract the message text from the webhook payload

    await this.receiveMessageWebhook.execute({ name, phone_number_id, from, message });

    return reply.status(200).send();
  }
}

export { ReceiveMessageWebhookController };