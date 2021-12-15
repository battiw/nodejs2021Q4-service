import { v4 as uuidv4 } from 'uuid';

/**
 * Task creation funcrion
 *
 * @param id - id task
 * @param title - title task
 * @param order - order task
 * @param description - login user
 * @param userId - id user
 * @param boardId - id board
 * @param columnId - id column
 */

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
