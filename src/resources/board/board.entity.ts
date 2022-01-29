import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Tasks } from '../tasks/tasks.entity';
// import { Columns } from './column.entity';
import { Columns as BoardCol } from '../board/dto/column-create.dto';

@Entity()
export class Board {
  @PrimaryGeneratedColumn('uuid')
  // @Generated('uuid')
  id: string;

  @Column()
  title: string;

  @Column('jsonb', { nullable: true })
  columns!: BoardCol[];

  @OneToMany(() => Tasks, (tasks) => tasks.board)
  tasks!: Tasks[];

  constructor({ id = uuid(), title = 'BOARD_TITLE', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns.map((col) => new BoardCol(col));
  }
}

// import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
// import { v4 as uuid } from 'uuid';
// import { Column as BoardCol } from '../resources/board/column.model';
// // eslint-disable-next-line import/no-cycle
// import { Task } from './Tasks';
// // import { Task } from './Tasks';

// @Entity({ name: 'boards' })
// class Board {
//   @PrimaryColumn('varchar', { length: 250 })
//   id!: string;

//   @Column('varchar', { length: 250 })
//   title!: string;

//   @Column('jsonb', { nullable: true })
//   columns!: BoardCol[];

//   @OneToMany(() => Task, (task) => task.board)
//   tasks!: Task[];

//   constructor({ id = uuid(), title = 'BOARD_TITLE', columns = [] } = {}) {
//     this.id = id;
//     this.title = title;
//     this.columns = columns.map((col) => new BoardCol(col));
//   }
// }

// export { Board };
