import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Tasks } from '../tasks/tasks.entity';

@Entity()
export class File {
  @PrimaryGeneratedColumn('uuid')
  // @Generated('uuid')
  id: string;

  @Column()
  name: string;

  constructor({ id = uuid(), name = '' } = {}) {
    this.id = id;

    this.name = name;
  }
}
