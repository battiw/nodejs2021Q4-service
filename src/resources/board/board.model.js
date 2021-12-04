const { v4: uuidv4 } = require( 'uuid' );

class Board {
    constructor({
      id = uuidv4(),
      title = 'title',
      columns = 'columns',
    } = {}) {
      this.id = id;
      this.title = title;
      this.columns = columns;
    }
  }
  module.exports = Board;
  