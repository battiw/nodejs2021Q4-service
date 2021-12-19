import { v4 as uuidv4IDBoard } from 'uuid';
import { Column } from './column.model';

/**
 * Board creation funcrion
 *
 * @param id - id board
 * @param title - title board
 * @param columns - array of columns
 */
class Board {
  id: string;

  title: string;

  columns: Column[];

  constructor({ id = uuidv4IDBoard(), title = 'title', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns.map((colelement) => new Column(colelement));
  }
}
export { Board };
