import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Column as BoardCol } from '../resources/board/column.model';
// eslint-disable-next-line import/no-cycle
import { Task } from './Tasks';
// import { Task } from './Tasks';

@Entity({ name: 'boards' })
class Board {
  @PrimaryColumn('varchar', { length: 250 })
  id!: string;

  @Column('varchar', { length: 250 })
  title!: string;

  @Column('jsonb', { nullable: true })
  columns!: BoardCol[];

  @OneToMany(() => Task, (task) => task.board)
  tasks!: Task[];

  constructor({ id = uuid(), title = 'BOARD_TITLE', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns.map((col) => new BoardCol(col));
  }
}

export { Board };
