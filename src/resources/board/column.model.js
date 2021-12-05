const { v4: uuidv4 } = require( 'uuid' );
// const Task = require('../tasks/tasks.model');

class Column {
    constructor({
      id = uuidv4(),
      title = 'title',
      order = [],
    } = {}) {
      this.id = id;
      this.title = title;
      this.order = order;
      // this.order = order.map(element => new Task(element));

    }
  }
  module.exports = Column;
  