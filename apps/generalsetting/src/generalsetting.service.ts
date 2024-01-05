import { Injectable } from '@nestjs/common';

@Injectable()
export class GeneralsettingService {
  getHello(): string {
    return 'generalSettings';
  }
}
