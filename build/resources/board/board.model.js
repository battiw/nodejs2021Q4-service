"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
const uuid_1 = require("uuid");
const column_model_1 = require("./column.model");
class Board {
    constructor({ id = (0, uuid_1.v4)(), title = 'title', columns = [] } = {}) {
        this['id'] = id;
        this.title = title;
        this.columns = columns.map((colelement) => new column_model_1.Column(colelement));
    }
}
exports.Board = Board;
