import { Entity, Column, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

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
