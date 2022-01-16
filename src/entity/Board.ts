import { Entity, Column, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Column as BoardCol } from '../resources/board/column.model';

@Entity({ name: 'boards' })
class Board {
  @PrimaryColumn('varchar', { length: 250 })
  id!: string;

  @Column('varchar', { length: 250 })
  title!: string;

  @Column('jsonb', { nullable: true })
  columns!: BoardCol[];

  constructor({ id = uuid(), title = 'BOARD_TITLE', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns.map((col) => new BoardCol(col));
  }
}

export { Board };
