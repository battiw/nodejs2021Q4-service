"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const uuid_1 = require("uuid");
/**
 * User creation function
 *
 * @param id - id user
 * @param name - name user
 * @param login - login user
 * @param password - password of user
 */
class User {
    constructor({ id = (0, uuid_1.v4)(), name = 'USER', login = 'user', password = 'P@55w0rd', } = {}) {
        this.id = id;
        this.name = name;
        this.login = login;
        this.password = password;
    }
    /**
     * Static method toResponse transforming object
     * @param id - an identification number
     * @param name - username
     * @param login - login user
     * @returns Object with given parameters
     */
    static toResponse(user) {
        const { id, name, login } = user;
        return { id, name, login };
    }
}
exports.User = User;
