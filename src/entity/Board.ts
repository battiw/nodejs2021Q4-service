import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { v4 as uuid } from 'uuid';
// eslint-disable-next-line import/no-cycle
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

  @OneToMany(() => Columns, (columns) => columns.board)
  columns!: Columns[];

  // eslint-disable-next-line no-use-before-define
  static id: Board;

  constructor({ id = uuid(), title = 'title' } = {}) {
    this.id = id;
    this.title = title;
    // this.columns = columns.map((colelement) => new Columns(colelement));
  }
}
export { Board };
