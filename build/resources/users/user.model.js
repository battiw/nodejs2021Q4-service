import { v4 as uuidv4IdUser } from 'uuid';
class User {
    constructor({ id = uuidv4IdUser(), name = 'USER', login = 'user', password = 'P@55w0rd' } = {}) {
        this.id = id;
        this.name = name;
        this.login = login;
        this.password = password;
    }
    static toResponse(user) {
        const { id, name, login } = user;
        return { id, name, login };
    }
}
export { User };
