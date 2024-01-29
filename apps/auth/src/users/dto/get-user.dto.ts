import { Type } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class getUserDto {
  @IsString()
  @IsNotEmpty()
  @Type(() => Number)
  id: number;
}
