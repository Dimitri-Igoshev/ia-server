import { Injectable } from '@nestjs/common';
import * as mailer from '@sendgrid/mail';

export interface MailSandGridData {
  from: string;
  to: string;
  subject: string;
  html: string;
}

@Injectable()
export class MailService {
  constructor() {
    mailer.setApiKey(process.env.SENDGRID_API_KEY);
  }

  async send(data: MailSandGridData) {
    try {
      await mailer.send(data);
    } catch (error) {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  }
}
