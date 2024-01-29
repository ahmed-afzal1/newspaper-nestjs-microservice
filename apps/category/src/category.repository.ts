import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { Category } from './entity/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class CategoryRepository extends AbstractRepository<Category> {
  protected readonly logger = new Logger(CategoryRepository.name);

  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    entityManager: EntityManager,
  ) {
    super(categoryRepository, entityManager);
  }
}
