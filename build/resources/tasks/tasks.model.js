"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const uuid_1 = require("uuid");
/**
 * Task creation funcrion
 *
 * @param id - id task
 * @param title - title task
 * @param order - order task
 * @param description - login user
 * @param userId - id user
 * @param boardId - id board
 * @param columnId - id column
 */
class Task {
    constructor({ id = (0, uuid_1.v4)(), title = 'title', order = 0, description = 'description', userId = null, boardId = null, columnId = null, } = {}) {
        this.id = id;
        this.title = title;
        this.order = order;
        this.description = description;
        this.userId = userId;
        this.boardId = boardId;
        this.columnId = columnId;
    }
}
exports.Task = Task;
