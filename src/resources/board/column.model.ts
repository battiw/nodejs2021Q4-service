import { v4 as uuidv4IDColumn } from 'uuid';

class Column {
  id: string;

  title: string;

  order: string;

  constructor({
    id = uuidv4IDColumn(),
    title = 'title',
    order = 'order',
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }
}
export { Column };
