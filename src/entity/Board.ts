import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import { v4 as uuid } from 'uuid';
import { Columns } from './Columns';

/**
 * Board creation funcrion
 *
 * @param id - id board
 * @param title - title board
 * @param columns - array of columns
 */
@Entity({ name: 'board' })
class Board {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @ManyToMany((_type) => Columns)
  @JoinTable()
  categories: Columns[] | undefined;

  columns: Columns[];

  constructor({ id = uuid(), title = 'title', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns.map((colelement) => new Columns(colelement));
  }
}
export { Board };
