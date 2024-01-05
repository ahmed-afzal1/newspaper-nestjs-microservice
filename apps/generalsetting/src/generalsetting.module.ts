import { Module } from '@nestjs/common';
import { GeneralsettingController } from './generalsetting.controller';
import { GeneralsettingService } from './generalsetting.service';

@Module({
  imports: [],
  controllers: [GeneralsettingController],
  providers: [GeneralsettingService],
})
export class GeneralsettingModule {}
