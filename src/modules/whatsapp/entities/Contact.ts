import { v4 as uuidv4 } from 'uuid';

class Contact {
  id?: string;

  name: string;

  phone_number_id: number;

  whatsapp_number: string;

  avatar: string;

  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Contact };