import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity({ name: 'task' })
class Task {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  title?: string;

  @Column()
  order?: number;

  @Column()
  description?: string;

  @Column('uuid')
  userId: null | undefined | string;

  @Column('uuid')
  boardId: null | undefined | string;

  @Column('uuid')
  columnId: null | undefined | string;

  constructor({
    id = uuid(),
    title = 'title',
    order = 1,
    description = 'description',
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
