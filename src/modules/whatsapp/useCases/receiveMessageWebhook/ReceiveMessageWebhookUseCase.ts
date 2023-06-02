import axios, { AxiosResponse, AxiosError } from 'axios';

import { IContactsRepository } from 'modules/whatsapp/repositories/IContactsRepository';
import { IMessageRepository } from 'modules/messages/repositories/IMessageRepository';

interface IRequest {
  name: string;
  phone_number_id: number;
  from: number;
  message: string;
}

interface ISendMessageData {
  messaging_product: string;
  to: number;
  text: {
    body: string;
  };
}

class ReceiveMessageWebhookUseCase {

  constructor(
    private contactsRepository: IContactsRepository,
    private messageRepository: IMessageRepository
  ) { }

  async execute({ name, phone_number_id, from, message }: IRequest): Promise<void> {

    let contactId = null;

    const contactAreadyExists = await this.contactsRepository.findByPhoneNumberId(phone_number_id);

    if (!contactAreadyExists) {
      contactId = await this.contactsRepository.create({
        name,
        phone_number_id,
        whatsapp_number: from,
        avatar: 'file.png'
      });
    } else {
      contactId = contactAreadyExists.id;
    }

    await this.messageRepository.create({
      user_id: 'wjrlnjefrior564aal587wer',
      contact_id: contactId,
      content: message,
      position: 'left'
    });

    const token = process.env.WHATSAPP_TOKEN;

    const url = `https://graph.facebook.com/v16.0/${phone_number_id}/messages?access_token=${token}`;

    await this.messageRepository.create({
      user_id: 'wjrlnjefrior564aal587wer',
      contact_id: contactId,
      content: 'Olá, tudo bem?',
      position: 'right'
    });

    const data: ISendMessageData = {
      messaging_product: "whatsapp",
      to: from,
      text: { body: "Olá, tudo bem?" },
    };

    axios.post<ISendMessageData, AxiosResponse<ISendMessageData>>(url, data)
      .then(response => {
        console.log('Response:', response.data);
      })
      .catch((error: AxiosError) => {
        console.error('Error:', error.response?.data ?? error.message);
      });
  }
}

export { ReceiveMessageWebhookUseCase };