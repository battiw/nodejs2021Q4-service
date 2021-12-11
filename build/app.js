"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
// import SwaggerUI from 'swagger-ui-express';
// import pathToSwagg from 'path';
// import YAML from 'yamljs';
const user_router_1 = require("./resources/users/user.router");
const board_router_1 = require("./resources/board/board.router");
const app = (0, express_1.default)();
exports.app = app;
// const swaggerDocument = YAML.load(
//   pathToSwagg.join(__dirname, '../doc/api.yaml')
// );
app.use(express_1.default.json());
// app.use('/doc', SwaggerUI.serve, SwaggerUI.setup(swaggerDocument));
app.use('/', (req, res, next) => {
    if (req.originalUrl === '/') {
        res.send('Service is running!');
        return;
    }
    next();
});
app.use('/users', user_router_1.routerUser);
app.use('/boards', board_router_1.boardRouter);
