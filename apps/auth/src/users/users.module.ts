import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Admin } from './entity/admin.entity';
import { UsersRepository } from './users.repository';
import { DatabaseModule } from '@app/common';

@Module({
  imports: [DatabaseModule, DatabaseModule.forFeature([Admin])],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  exports: [UsersService],
})
export class UsersModule {}
