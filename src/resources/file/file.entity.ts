import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity()
export class File {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  image: string;

  constructor({ id = uuid(), name = 'na', image = 'im' } = {}) {
    this.id = id;

    this.name = name;

    this.image = image;
  }
}
