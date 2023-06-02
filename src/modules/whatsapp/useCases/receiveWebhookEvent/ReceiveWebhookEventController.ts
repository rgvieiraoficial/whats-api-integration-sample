import { FastifyReply, FastifyRequest } from 'fastify';

import { ReceiveWebhookEventUseCase } from './ReceiveWebhookEventUseCase';

interface IRequestBody {
  entry: [
    {
      changes: [
        {
          response: object,
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

class ReceiveWebhookEventController {

  constructor(private receiveWebhookEvent: ReceiveWebhookEventUseCase) { }

  async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const requestBody = request.body as IRequestBody;

    console.log(requestBody.entry[0].changes[0]);

    if (requestBody.entry[0].changes[0].response) {
      const name = requestBody.entry[0].changes[0].value.contacts[0].profile.name;

      const phone_number_id = requestBody.entry[0].changes[0].value.metadata.phone_number_id;

      const from = Number(requestBody.entry[0].changes[0].value.messages[0].from); //extract the phone number from the webhook payload

      const message = requestBody.entry[0].changes[0].value.messages[0].text.body; // extract the message text from the webhook payload

      await this.receiveWebhookEvent.execute({ name, phone_number_id, from, message });
    }

    return reply.status(200).send();
  }
}

export { ReceiveWebhookEventController };