/* eslint-disable lines-between-class-members */
/* eslint-disable no-unreachable */
import Express from 'express';
// import Express, { Request, Response, NextFunction } from 'express';

import SwaggerUI from 'swagger-ui-express';
import pathToSwagg from 'path';
import YAML from 'yamljs';

// import { logger } from './log/logger'; //simple logging
// import { finished } from 'stream'; // simple logging
// import * as fs from 'fs'; // simple logging
// import morgan from 'morgan'; // Morgan logging
// import { createWriteStream } from 'fs'; // Morgan loggin
// import { logger } from './log/WinstonLog/loggerWinston';// Winston logger
import { loggerInfo } from './log/WinstonLog/expressWinston'; // Winston-express logger
// import { loggerError } from './log/WinstonLog/expressWinstonError'; // Winston-express logger

import { errorValid } from './errorModule';

import { routerUser } from './resources/users/user.router';
import { boardRouter } from './resources/board/board.router';
import { loggerError } from './log/WinstonLog/expressWinstonError';

const app = Express();
const swaggerDocument = YAML.load(
  pathToSwagg.join(__dirname, '../doc/api.yaml')
);

app.use(Express.json());

// simple logging!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// app.use(logger); // simple logging

// Morgan logging!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// app.use(
//   morgan('combined', {
//     stream: createWriteStream('./src/log/loggerMorgan.log'),
//   })
// ); // Morgan logging all
// app.use(
//   morgan('combined', {
//     skip: function (_req, res) {
//       return res.statusCode < 400;
//     },
//     stream: createWriteStream('./src/log/loggerMorganError.log'),
//   })
// ); // Morgan logging error

// Winston logging!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// logger.silly('silly');
// logger.error('error');
// logger.info('info');
// app.use(logger.info);
// logger.info('info');

// Winston-express!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
app.use(loggerInfo);

app.use('/doc', SwaggerUI.serve, SwaggerUI.setup(swaggerDocument));
app.use('/', (req, res, next) => {
  // throw new SyntaxError('TEST ERRROR!!!');
  Promise.reject(Error('Oops!'));
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', routerUser);

app.use('/boards', boardRouter);

// process.on('uncaughtException', function(err, ));

process.on('unhandledRejection', loggerError);

app.use(loggerError);

app.use(errorValid);

export { app };
