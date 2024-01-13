import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entity/post.entity';
import { EntityManager, Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
    private readonly entityManager: EntityManager,
  ) {}

  async createPost(createPostDto: CreatePostDto) {
    const post = new Post();
    post.title = createPostDto.title;
    return await this.entityManager.save(post);
  }
}
