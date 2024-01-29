import { AbstractEntity } from '@app/common';
import { Column, CreateDateColumn, Entity, UpdateDateColumn } from 'typeorm';

@Entity()
export class Post extends AbstractEntity<Post> {
  @Column({ type: 'varchar', length: 255, default: null })
  title: string;

  @Column({ type: 'varchar', length: 255, default: null })
  slug: string;

  @Column({ type: 'varchar', length: 50, default: null })
  post_type: string;

  @Column({ type: 'varchar', length: 255, default: null })
  photo: string;

  @Column({ type: 'varchar', length: 255, default: null })
  audio: string;

  @Column({ type: 'varchar', length: 255, default: null })
  video: string;

  @Column({ type: 'text', default: null })
  description: string;

  @Column({ type: 'text', default: null })
  tags: string;

  @Column({ type: 'text', default: null })
  meta_tag: string;

  @Column({ type: 'int', default: 0 })
  is_feature: number;

  @Column({ type: 'int', default: 0 })
  is_slider: number;

  @Column({ type: 'int', default: 0 })
  is_pending: number;

  @Column({ type: 'int', default: 0 })
  is_draft: number;

  @Column({ type: 'int', default: 0 })
  is_schedule: number;

  @UpdateDateColumn({ type: 'timestamp', default: null })
  schedule_post_date: Date;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
