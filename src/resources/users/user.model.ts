import { v4 as uuidv4IdUser } from 'uuid';

class User {
  id: string;

  name: string;

  login: string;

  password: string;

  constructor({
    id = uuidv4IdUser(),
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
  }) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

export { User };
