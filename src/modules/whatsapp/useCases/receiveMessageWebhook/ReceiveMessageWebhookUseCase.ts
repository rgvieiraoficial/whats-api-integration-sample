interface IRequest {
  phone_number_id: number;
  from: number;
  message: string;
}

class ReceiveMessageWebhookUseCase {

  async execute({ phone_number_id, from, message }: IRequest): Promise<void> {
    console.log(`New messagre from: ${from} - Content: ${message}`);
  }
}

export { ReceiveMessageWebhookUseCase };