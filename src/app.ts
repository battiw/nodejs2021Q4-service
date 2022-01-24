/* eslint-disable import/no-useless-path-segments */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable lines-between-class-members */
/* eslint-disable no-unreachable */
import express from 'express';
import { finished } from 'stream';
import { logger } from './log/WinstonLog/loggerWinston';
import { routerUser } from './resources/users/user.router';
import { routerBoard } from './resources/board/board.router';
import { routerLogin } from './resources/auth/loginRouter';
import errorHandler from './log/errorHandler';
import { config } from './common/config';
import { verification } from '../src/midlware/chekToken';

const { ERROR_LEVEL, LOG_LEVEL, WARN_LEVEL } = config;

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use((req, res, next) => {
  const { query, url, body } = req;

  next();

  finished(res, () => {
    const { statusCode } = res;
    if (statusCode >= 100) {
      logger.log(
        LOG_LEVEL!,
        ` INFO LEVEL => ${new Date()}\n StatusCode: ${statusCode};\n URL: ${url}\n Query Parameters: ${JSON.stringify(
          query
        )} Body: ${JSON.stringify(body)}`
      );
    }
    if (statusCode >= 400) {
      logger.log(
        WARN_LEVEL!,
        ` WARN LEVEL => ${new Date()}\n StatusCode: ${statusCode};\n URL: ${url}\n Query Parameters: ${JSON.stringify(
          query
        )} Body: ${JSON.stringify(body)}`
      );
    }
  });
});

app.use('/', verification);

app.use('/login', routerLogin);

app.use('/users', routerUser);

app.use('/boards', routerBoard);

// app.use('/login', routerLogin);

// app.use('/users', verification, routerUser);

// app.use('/boards', verification, routerBoard);

app.use(errorHandler);

process.on('uncaughtException', (error: Error) => {
  console.log('MY uncaughtException');
  logger.log(
    ERROR_LEVEL!,
    `captured error: ${new Date()} ${error} ${error.stack}`
  );
});

process.on('unhandledRejection', (error: Error) => {
  logger.log(
    ERROR_LEVEL!,
    `Unhandled rejection detected: ${new Date()} ${error} ${error.stack}`
  );
  setTimeout(() => {
    process.exit(1);
  }, 100);
});

// Testing uncaughtException
// throw Error('UncaughtException!!!');

// Testing unhandledRejection
// Promise.reject(new Error('UnhandledRejection!!!'));

export { app };
