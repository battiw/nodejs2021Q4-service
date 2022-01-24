import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
// eslint-disable-next-line import/no-cycle
import { Board } from './Board';
// eslint-disable-next-line import/no-cycle
import { User } from './User';

@Entity({ name: 'tasks' })
class Task {
  @PrimaryColumn('varchar', { length: 50 })
  id!: string;

  @Column('varchar', { length: 50 })
  title!: string;

  @Column('integer')
  order: number;

  @Column('varchar', { length: 50 })
  description: string;

  @Column('varchar', { length: 50, nullable: true })
  userId: string | null;

  @Column('varchar', { length: 50, nullable: true })
  boardId: string | null;

  @Column('varchar', { length: 50, nullable: true })
  columnId: string | null;

  @ManyToOne(() => User, (user) => user.tasks, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'userId' })
  user!: string;

  @ManyToOne(() => Board, (board) => board.tasks, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'boardId' })
  board!: string;

  constructor({
    id = uuid(),
    title = 'Autotest task',
    order = 0,
    description = 'Lorem ipsum',
    userId = null,
    boardId = null,
    columnId = null,
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}

export { Task };
