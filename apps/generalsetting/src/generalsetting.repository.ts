import { AbstractRepository } from '@app/common';
import { GeneralSetting } from './entity/generalsetting.entity';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class GeneralSettingRepository extends AbstractRepository<GeneralSetting> {
  protected readonly logger = new Logger(GeneralSettingRepository.name);

  constructor(
    @InjectRepository(GeneralSetting)
    private readonly generalSettingRepository: Repository<GeneralSetting>,
    entitymanager: EntityManager,
  ) {
    super(generalSettingRepository, entitymanager);
  }
}
