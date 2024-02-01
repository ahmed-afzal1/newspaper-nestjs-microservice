import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreateArticlePostDto } from './dto/create-article-post.dto';
import { JwtAuthGuard } from '@app/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { UpdateArticlePostDto } from './dto/update-article-post.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('all')
  @UseGuards(JwtAuthGuard)
  async index() {
    return await this.postService.findAll();
  }

  @Post('article/store')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(
    FileInterceptor('photo', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const filename = `${uniqueSuffix}${ext}`;
          callback(null, filename);
        },
      }),
    }),
  )
  async articleStore(
    @UploadedFile() photo: Express.Multer.File,
    @Body() createArticlePostDto: CreateArticlePostDto,
  ) {
    const postData = {
      ...createArticlePostDto,
      photo: photo.filename,
    };

    return await this.postService.articleStore(postData);
  }

  @Get('edit/:id')
  @UseGuards(JwtAuthGuard)
  async edit(@Param('id') id: string) {
    return await this.postService.edit(+id);
  }

  @Put('article/update/:id')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(
    FileInterceptor('photo', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const filename = `${uniqueSuffix}${ext}`;
          callback(null, filename);
        },
      }),
    }),
  )
  async articleUpdate(
    @UploadedFile() photo: Express.Multer.File,
    @Body() updateArticlePostDto: UpdateArticlePostDto,
    @Param('id') id: string,
  ) {
    const postData = {
      ...updateArticlePostDto,
      photo: photo?.filename,
    };

    return await this.postService.articleUpdate(+id, postData);
  }

  @Delete('delete/:id')
  async destroy(@Param('id') id: string) {
    await this.postService.delete(+id);
    return 'data deleted successfully';
  }
}
