import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DatabaseModule } from '@app/common';
import { Admin } from './entity/admin.entity';

@Module({
  imports: [DatabaseModule, DatabaseModule.forFeature([Admin])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
