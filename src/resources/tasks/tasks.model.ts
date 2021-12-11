import { v4 as uuidv4 } from 'uuid';

class Task {
  id: string;

  title: string;

  order: number;

  description: string;

  userId: null;

  boardId: null;

  columnId: null;

  constructor({
    id = uuidv4(),
    title = 'title',
    order = 0,
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
