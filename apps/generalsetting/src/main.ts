import { NestFactory } from '@nestjs/core';
import { GeneralsettingModule } from './generalsetting.module';

async function bootstrap() {
  const app = await NestFactory.create(GeneralsettingModule);
  await app.listen(3000);
}
bootstrap();
