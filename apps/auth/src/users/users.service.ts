import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Admin } from './entity/admin.entity';
import * as bcrypt from 'bcryptjs';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto) {
    await this.validateCreateUserDto(createUserDto);

    const admin = new Admin();

    admin.name = createUserDto.name;
    admin.email = createUserDto.email;
    admin.password = await bcrypt.hash(createUserDto.password, 10);

    return await this.usersRepository.create(admin);
  }

  private async validateCreateUserDto(createUserDto: CreateUserDto) {
    try {
      await this.usersRepository.findOne({ email: createUserDto.email });
    } catch (err) {
      return;
    }
    throw new UnprocessableEntityException('Email already exists.');
  }
}
