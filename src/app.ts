/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable lines-between-class-members */
/* eslint-disable no-unreachable */
import Express from 'express';
import { finished } from 'stream';
import { logger } from './log/WinstonLog/loggerWinston';
import { routerUser } from './resources/users/user.router';
import { boardRouter } from './resources/board/board.router';
import errorHandler from './log/errorHandler';
import { config } from './common/config';

const { ERROR_LEVEL, LOG_LEVEL, WARN_LEVEL } = config;

const app = Express();

app.use(Express.json());

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

app.use('/users', routerUser);

app.use('/boards', boardRouter);

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
