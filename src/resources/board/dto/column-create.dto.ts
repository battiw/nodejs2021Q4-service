import { v4 as uuid } from 'uuid';
import { IsNumber, IsString } from 'class-validator';

class Columns {
  id: string;

  @IsString()
  title: string;

  @IsNumber()
  order: number;

  constructor({ id = uuid(), title = 'COLUMN', order = 0 } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }
}

export { Columns };
