import { AbstractRepository, Admin } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class UsersRepository extends AbstractRepository<Admin> {
  protected readonly logger = new Logger(UsersRepository.name);

  constructor(
    @InjectRepository(Admin)
    private readonly usersRepository: Repository<Admin>,
    entityManager: EntityManager,
  ) {
    super(usersRepository, entityManager);
  }
}
