import { AbstractEntity } from '@app/common';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  UpdateDateColumn,
} from 'typeorm';
import { Post } from '../../entity/post.entity';

@Entity()
export class Category extends AbstractEntity<Category> {
  @Column({ type: 'varchar', length: 255, default: null })
  title: string;

  @Column({ type: 'varchar', length: 255, default: null })
  slug: string;

  @Column({ type: 'varchar', length: 20, default: null })
  color: string;

  @Column({ type: 'int', default: 0 })
  show_at_homepage: number;

  @Column({ type: 'int', default: 0 })
  show_on_menu: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @OneToMany(() => Post, (post) => post.category)
  posts: Post[];
}
