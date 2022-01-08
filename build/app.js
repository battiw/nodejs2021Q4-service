"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable lines-between-class-members */
/* eslint-disable no-unreachable */
const express_1 = __importDefault(require("express"));
// import * as express from 'express';
const stream_1 = require("stream");
const loggerWinston_1 = require("./log/WinstonLog/loggerWinston");
const user_router_1 = require("./resources/users/user.router");
const board_router_1 = require("./resources/board/board.router");
const errorHandler_1 = __importDefault(require("./log/errorHandler"));
const config_1 = require("./common/config");
const { ERROR_LEVEL, LOG_LEVEL, WARN_LEVEL } = config_1.config;
const app = (0, express_1.default)();
exports.app = app;
// const app = express.default();
app.use(express_1.default.json());
app.use('/', (req, res, next) => {
    // throw new Error('Ops!!!');
    if (req.originalUrl === '/') {
        res.send('Service is running!');
        return;
    }
    next();
});
app.use((req, res, next) => {
    // throw new Error('Ops!!!');
    const { query, url, body } = req;
    next();
    (0, stream_1.finished)(res, () => {
        const { statusCode } = res;
        if (statusCode >= 100) {
            loggerWinston_1.logger.log(LOG_LEVEL, ` INFO LEVEL => ${new Date()}\n StatusCode: ${statusCode};\n URL: ${url}\n Query Parameters: ${JSON.stringify(query)} Body: ${JSON.stringify(body)}`);
        }
        if (statusCode >= 400) {
            loggerWinston_1.logger.log(WARN_LEVEL, ` WARN LEVEL => ${new Date()}\n StatusCode: ${statusCode};\n URL: ${url}\n Query Parameters: ${JSON.stringify(query)} Body: ${JSON.stringify(body)}`);
        }
    });
});
app.use('/users', user_router_1.routerUser);
app.use('/boards', board_router_1.boardRouter);
app.use(errorHandler_1.default);
process.on('uncaughtException', (error) => {
    console.log('MY uncaughtException');
    loggerWinston_1.logger.log(ERROR_LEVEL, `captured error: ${new Date()} ${error} ${error.stack}`);
});
process.on('unhandledRejection', (error) => {
    loggerWinston_1.logger.log(ERROR_LEVEL, `Unhandled rejection detected: ${new Date()} ${error} ${error.stack}`);
    setTimeout(() => {
        process.exit(1);
    }, 100);
});
