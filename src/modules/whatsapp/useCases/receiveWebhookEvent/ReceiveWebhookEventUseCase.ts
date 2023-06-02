import axios, { AxiosResponse, AxiosError } from 'axios';

import { IContactsRepository } from '../../repositories/IContactsRepository';
import { IMessagesRepository } from '../../../messages/repositories/IMessagesRepository';
import { SocketServer } from '../../../../socketServer';

interface IRequest {
  name: string;
  phone_number_id: number;
  from: number;
  message_id: string;
  message: string;
}

interface ISendMessageData {
  messaging_product: string;
  to: number;
  text: {
    body: string;
  };
  messages?: [
    {
      id: string;
    }
  ]
}

class ReceiveWebhookEventUseCase {

  constructor(
    private contactsRepository: IContactsRepository,
    private messagesRepository: IMessagesRepository,
    private socketServer: SocketServer
  ) { }

  async execute({ name, phone_number_id, from, message_id, message }: IRequest): Promise<void> {

    let contactId = null;

    const contactAreadyExists = await this.contactsRepository.findByPhoneNumberId(phone_number_id);

    if (!contactAreadyExists) {
      const contact = await this.contactsRepository.create({
        name,
        phone_number_id,
        whatsapp_number: from,
        avatar: 'file.png'
      });

      contactId = contact.id;
    } else {
      contactId = contactAreadyExists.id;
    }

    const clientMessage = await this.messagesRepository.create({
      user_id: 'wjrlnjefrior564aal587wer',
      contact_id: contactId,
      content: message,
      position: 'left',
      whatsapp_message_id: message_id
    });

    const token = process.env.WHATSAPP_TOKEN;

    this.socketServer.emit('newMessage', clientMessage);

    const url = `https://graph.facebook.com/v16.0/${phone_number_id}/messages?access_token=${token}`;

    const data: ISendMessageData = {
      messaging_product: "whatsapp",
      to: from,
      text: { body: "Olá, tudo bem?" },
    };

    const response = await axios.post<ISendMessageData, AxiosResponse<ISendMessageData>>(url, data);

    const messageResponse = await this.messagesRepository.create({
      user_id: 'wjrlnjefrior564aal587wer',
      contact_id: contactId,
      content: 'Olá, tudo bem?',
      position: 'right',
      whatsapp_message_id: response.data.messages[0].id
    });

    this.socketServer.emit('newMessage', messageResponse);
  }
}

export { ReceiveWebhookEventUseCase };