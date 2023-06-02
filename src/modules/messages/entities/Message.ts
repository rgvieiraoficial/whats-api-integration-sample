import { v4 as uuidv4 } from 'uuid';

class Message {
  id?: string;

  user_id: string;

  contact_id: string;

  content: string;

  position: string;

  whatsapp_message_id: string;

  status: number;

  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Message };