import { Entity, Column, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

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

export { User };
