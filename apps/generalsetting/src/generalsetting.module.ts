import { Module } from '@nestjs/common';
import { GeneralsettingController } from './generalsetting.controller';
import { GeneralsettingService } from './generalsetting.service';
import { DatabaseModule, LoggerModule } from '@app/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    DatabaseModule,
    LoggerModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.number().required(),
        DB_NAME: Joi.string().required(),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
      }),
    }),
  ],
  controllers: [GeneralsettingController],
  providers: [GeneralsettingService],
})
export class GeneralsettingModule {}
