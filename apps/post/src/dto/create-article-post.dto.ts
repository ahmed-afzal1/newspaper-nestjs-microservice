import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateArticlePostDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  slug: string;

  @IsNotEmpty()
  @IsString()
  post_type: string;

  tags: string;

  meta_tag: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  photo: any;

  @IsNotEmpty()
  @IsNumber()
  is_feature: number;

  @IsNotEmpty()
  @IsNumber()
  is_slider: number;

  @IsNotEmpty()
  @IsNumber()
  is_schedule: number;
}
