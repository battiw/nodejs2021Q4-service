import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity()
export class File {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('varchar', { nullable: true, length: 100 })
  name!: string;

  @Column('varchar', { nullable: true, length: 100 })
  filesave!: string;

  constructor({ id = uuid(), name = 'na', filesave = 'im' } = {}) {
    this.id = id;

    this.name = name;

    this.filesave = filesave;
  }
}
