import { MailerService } from '@nestjs-modules/mailer';
import * as path from 'path';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationService {
  constructor(private readonly mailerService: MailerService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async notifyEmail({ postId, message }) {
    console.log(postId, message);
    await this.mailerService.sendMail({
      to: 'user@gmail.com',
      subject: 'Welcome to Our Application',
      template: path.resolve(
        __dirname,
        '../../../libs/common/src/templates/email/welcome.ejs',
      ),
      context: {
        name: 'ahmmed afzal',
      },
    });
  }
}
