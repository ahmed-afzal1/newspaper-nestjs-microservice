import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entity/post.entity';
import { EntityManager, Repository } from 'typeorm';
import { CreateArticlePostDto } from './dto/create-article-post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
    private readonly entityManager: EntityManager,
  ) {}

  async createPost(createArticlePostDto: CreateArticlePostDto) {
    return createArticlePostDto;
    // const post = new Post();
    // post.title = createPostDto.title;
    // return await this.entityManager.save(post);
  }
}
