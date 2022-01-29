import { v4 as uuid } from 'uuid';

class Columns {
  id: string;

  title: string;

  order: number;

  constructor({ id = uuid(), title = 'COLUMN', order = 0 } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }
}

export { Columns };
