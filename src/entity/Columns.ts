/* eslint-disable no-use-before-define */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity({ name: 'columns' })
class Columns {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column()
  order!: number;

  constructor({ id = uuid(), title = 'title', order = 1 } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }
}
export { Columns };
