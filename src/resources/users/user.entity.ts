import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Tasks } from '../tasks/tasks.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  // @Generated('uuid')
  id: string;

  @Column('varchar', { nullable: true, length: 50 })
  name: string;

  @Column('varchar', { nullable: true, length: 50 })
  login: string;

  @Column('varchar', { nullable: true, length: 100 })
  password: string;

  @OneToMany(() => Tasks, (task) => task.user)
  tasks: string;

  constructor({
    id = uuid(),
    name = 'admin',
    login = 'admin',
    password = 'admin',
  } = {}) {
    this.id = id;

    this.name = name;

    this.login = login;

    this.password = password;
  }
  static toResponse(user: {
    id?: string | undefined;
    name?: string | undefined;
    login?: string | undefined;
    password?: string | undefined;
  }) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}
