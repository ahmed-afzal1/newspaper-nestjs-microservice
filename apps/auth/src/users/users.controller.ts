import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  @Post()
  async registerUser(@Body() createUserDto: CreateUserDto) {
    return createUserDto;
  }
}
