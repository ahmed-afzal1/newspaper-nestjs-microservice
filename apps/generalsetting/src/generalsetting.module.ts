import { Module } from '@nestjs/common';
import { GeneralsettingController } from './generalsetting.controller';
import { GeneralsettingService } from './generalsetting.service';
import { AUTH_SERVICE, DatabaseModule, LoggerModule } from '@app/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import { GeneralSetting } from './entity/generalsetting.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { GeneralSettingRepository } from './generalsetting.repository';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([GeneralSetting]),
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
    ClientsModule.registerAsync([
      {
        name: AUTH_SERVICE,
        useFactory: (configService: ConfigService) => ({
          transport: Transport.TCP,
          options: {
            host: configService.get('AUTH_HOST'),
            port: configService.get('AUTH_PORT'),
          },
        }),
        inject: [ConfigService],
      },
    ]),
  ],
  controllers: [GeneralsettingController],
  providers: [GeneralsettingService, GeneralSettingRepository],
})
export class GeneralsettingModule {}
