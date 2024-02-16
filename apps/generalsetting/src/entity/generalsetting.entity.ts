import { AbstractEntity } from '@app/common';
import { Column, CreateDateColumn, Entity, UpdateDateColumn } from 'typeorm';

@Entity()
export class GeneralSetting extends AbstractEntity<GeneralSetting> {
  @Column({ type: 'varchar', length: 255, default: null })
  logo: string;

  @Column({ type: 'varchar', length: 255, default: null })
  favicon: string;

  @Column({ type: 'varchar', length: 100, default: null })
  title: string;

  @Column({ type: 'varchar', length: 50, default: null })
  email: string;

  @Column({ type: 'varchar', length: 50, default: null })
  phone: string;

  @Column({ type: 'varchar', length: 100, default: null })
  copyright_text: string;

  @Column({ type: 'varchar', length: 50, default: null })
  website_primary_color: string;

  @Column({ type: 'varchar', length: 50, default: null })
  timezone: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
