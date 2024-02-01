import { AbstractRepository } from '@app/common';
import { Post } from './entity/post.entity';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class PostRepository extends AbstractRepository<Post> {
  protected readonly logger = new Logger(PostRepository.name);

  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
    entityManager: EntityManager,
  ) {
    super(postRepository, entityManager);
  }
}
