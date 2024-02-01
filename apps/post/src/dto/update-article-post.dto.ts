import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class UpdateArticlePostDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  slug: string;

  @IsNotEmpty()
  @IsString()
  post_type: string;

  @IsString()
  tags: string;

  @IsString()
  meta_tag: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  photo: any;

  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  is_feature: number;

  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  is_slider: number;

  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  is_schedule: number;

  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  category_id: number;
}
