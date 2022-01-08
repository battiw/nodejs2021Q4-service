"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loggerWinston_1 = require("./WinstonLog/loggerWinston");
exports.default = (err, _req, res, _next) => {
    loggerWinston_1.logger.log('error', `StatusCode: ${err}`);
    res.status(500).send('Internal Server Error');
};
