import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async index() {
    return 'post';
  }

  @Post('article/store')
  async store(@Body() createPostDto: CreatePostDto) {
    return await this.postService.createPost(createPostDto);
  }
}
