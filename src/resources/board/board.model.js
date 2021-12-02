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
      // [
      //   { title: 'Backlog', order: 1 },
      //   { title: 'Sprint', order: 2 }                    
      // ]
    }
    // static toResponseBoard(board) {
    //   const { id, title, columns } = board;
    //   return { title, columns };
    // }
  }


  
  module.exports = Board;
  