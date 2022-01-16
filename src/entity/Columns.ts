/* eslint-disable no-use-before-define */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { v4 as uuid } from 'uuid';
// eslint-disable-next-line import/no-cycle
import { Board } from './Board';

@Entity({ name: 'columns' })
class Columns {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column()
  order!: number;

  @ManyToOne(() => Board, (board) => board.columns)
  board!: Board;

  constructor({ id = uuid(), title = 'title', order = 1 } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    // eslint-disable-next-line no-self-assign
    this.board = this.board;
  }
}
export { Columns };
