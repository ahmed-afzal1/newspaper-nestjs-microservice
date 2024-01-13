import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'the name of the user',
    example: 'john doe',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'the email of the user',
    example: 'admin@gmail.com',
  })
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'the password of the user',
    example: '1234',
  })
  @ApiProperty()
  @IsNotEmpty()
  password: string;
}
