import { Controller, Get } from '@nestjs/common';
import { GeneralsettingService } from './generalsetting.service';

@Controller()
export class GeneralsettingController {
  constructor(private readonly generalsettingService: GeneralsettingService) {}

  @Get()
  getHello(): string {
    return this.generalsettingService.getHello();
  }
}
