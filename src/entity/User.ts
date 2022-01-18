import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { v4 as uuid } from 'uuid';
// eslint-disable-next-line import/no-cycle
import { Task } from './Tasks';

@Entity({ name: 'users' })
class User {
  @PrimaryColumn('varchar', { length: 50 })
  id!: string;

  @Column('varchar', { length: 50 })
  name!: string;

  @Column('varchar', { length: 50 })
  login!: string;

  @Column('varchar', { length: 50 })
  password!: string;

  @OneToMany(() => Task, (task) => task.user)
  tasks!: string;

  constructor({
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd',
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

export { User };
