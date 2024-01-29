import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { PostService } from './post.service';
import { CreateArticlePostDto } from './dto/create-article-post.dto';
import { JwtAuthGuard } from '@app/common';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('article')
  @UseGuards(JwtAuthGuard)
  async index() {
    return 'posttt';
  }

  @Post('article/store')
  async store(@Body() createArticlePostDto: CreateArticlePostDto) {
    return await this.postService.createPost(createArticlePostDto);
  }
}
