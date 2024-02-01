import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  slug: string;

  @IsNotEmpty()
  @IsString()
  color: string;

  @IsInt()
  @Type(() => Number)
  show_at_homepage: number;

  @IsInt()
  @Type(() => Number)
  show_on_menu: number;
}
