const { v4: uuidv4 } = require( 'uuid' );
const Columns = require('./column.model');


class Board {
    constructor({
      id = uuidv4(),
      title = 'title',
      columns = [],
    } = {}) {
      this.id = id;
      this.title = title;
      this.columns = columns.map(colelement => new Columns(colelement));
    }
  }
  module.exports = Board;
  