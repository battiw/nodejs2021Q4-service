import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity({ name: 'users' })
class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column()
  login!: string;

  @Column()
  password!: string;

  constructor({
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'login',
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }
}

export { User };
