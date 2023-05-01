import axios, { AxiosResponse, AxiosError } from 'axios';

interface IRequest {
  phone_number_id: number;
  from: number;
  message: string;
}

interface IMessage {
  messaging_product: string;
  to: number;
  text: {
    body: string;
  };
}

class ReceiveMessageWebhookUseCase {

  async execute({ phone_number_id, from, message }: IRequest): Promise<void> {

    const token = process.env.WHATSAPP_TOKEN;

    const url = `https://graph.facebook.com/v16.0/${phone_number_id}/messages?access_token=${token}`;

    const data: IMessage = {
      messaging_product: "whatsapp",
      to: from,
      text: { body: "Olá, tudo bem?" },
    };

    axios.post<IMessage, AxiosResponse<IMessage>>(url, data)
      .then(response => {
        console.log('Response:', response.data);
      })
      .catch((error: AxiosError) => {
        console.error('Error:', error.response?.data ?? error.message);
      });

    console.log(`New messagre from: ${from} - Content: ${message} `);
  }
}

export { ReceiveMessageWebhookUseCase };