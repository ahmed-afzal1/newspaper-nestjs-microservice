import { IsEmail, IsNotEmpty } from 'class-validator';

export class ContentDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  copyright_text: string;

  @IsNotEmpty()
  website_primary_color: string;

  @IsNotEmpty()
  timezone: string;
}
