import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Tasks } from '../tasks/tasks.entity';
import { Columns as BoardCol } from '../board/dto/column-create.dto';

@Entity()
export class Board {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column('jsonb', { nullable: true })
  columns!: BoardCol[];

  @OneToMany(() => Tasks, (tasks) => tasks.board)
  tasks!: Tasks[];

  constructor({ id = uuid(), title = 'BOARD_TITLE', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns.map((col) => new BoardCol(col));
  }
}
