import { IsNotEmpty } from 'class-validator';

export class logoDto {
  @IsNotEmpty()
  logo: string;
}
