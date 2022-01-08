"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = __importDefault(require("winston"));
const { createLogger, format, transports } = winston_1.default;
// eslint-disable-next-line import/first
const config_1 = require("../../common/config");
const { ERROR_LEVEL, LOG_LEVEL, WARN_LEVEL } = config_1.config;
const logger = createLogger({
    level: 'silly',
    format: format.combine(format.colorize(), format.cli()),
    transports: [
        new transports.Console(),
        new transports.File({
            filename: './src/log/WinstonLog/errorWinston.log',
            level: ERROR_LEVEL,
            format: format.combine(format.uncolorize(), format.json()),
        }),
        new transports.File({
            filename: './src/log/WinstonLog/infoWinston.log',
            level: LOG_LEVEL,
            format: format.combine(format.uncolorize(), format.json()),
        }),
        new transports.File({
            filename: './src/log/WinstonLog/warnWinston.log',
            level: WARN_LEVEL,
            format: format.combine(format.uncolorize(), format.json()),
        }),
    ],
});
exports.logger = logger;
