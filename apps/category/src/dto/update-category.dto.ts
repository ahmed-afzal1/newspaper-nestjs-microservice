import { IsNumber, IsString } from 'class-validator';

export class UpdateCategoryDto {
  @IsString()
  title: string;

  @IsString()
  slug: string;

  @IsString()
  color: string;

  @IsNumber()
  show_at_homepage: number;

  @IsNumber()
  show_on_menu: number;
}
