import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, default: null })
  name: string;

  @Column({ type: 'varchar', length: 100, default: null })
  email: string;

  @Column({ type: 'varchar', length: 100, default: null })
  password: string;

  @Column({ type: 'varchar', length: 255, default: null })
  photo: string;

  @Column({ type: 'boolean', default: 1 })
  status: boolean;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
