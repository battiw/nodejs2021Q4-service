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

const { ERROR_LEVEL } = config;

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
  // throw new Error("Ops!!!");
  const { query, url, body } = req;

  next();

  finished(res, () => {
    const { statusCode } = res;
    logger.log(
      'info',
      `StatusCode: ${statusCode}; \n URL: ${url} Query Parameters: ${JSON.stringify(
        query
      )} Body: ${JSON.stringify(body)}`
    );
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
  // logger.error(`captured error: ${new Date()} ${error} ${error.stack}`);
});

process.on('unhandledRejection', (error: Error) => {
  logger.error(
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

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// /* eslint-disable import/no-duplicates */
// /* eslint-disable no-unused-expressions */
// /* eslint-disable lines-between-class-members */
// /* eslint-disable no-unreachable */
// import Express from 'express';

// import SwaggerUI from 'swagger-ui-express';
// import pathToSwagg from 'path';
// import YAML from 'yamljs';

// import { loggerInfo } from './log/WinstonLog/expressWinston';
// // import { loggerError } from './log/WinstonLog/expressWinstonError';

// import { errorValid } from './errorModule';

// import { routerUser } from './resources/users/user.router';
// import { boardRouter } from './resources/board/board.router';

// import { logger } from './log/WinstonLog/loggerWinston';

// // eslint-disable-next-line import/order
// // import process from 'process';
// // eslint-disable-next-line import/order
// // import fs from 'fs';

// const app = Express();
// const swaggerDocument = YAML.load(
//   pathToSwagg.join(__dirname, '../doc/api.yaml')
// );

// app.use(Express.json());

// app.use(loggerInfo);

// app.use('/doc', SwaggerUI.serve, SwaggerUI.setup(swaggerDocument));
// app.use('/', (req, res, next) => {
//   // throw new Error('TEST ERRROR!!!');
//   // throw Error('Oops!');
//   // Promise.reject(Error('Oops!'));

//   if (req.originalUrl === '/') {
//     res.send('Service is running!');
//     return;
//   }
//   next();
// });

// app.use('/users', routerUser);

// app.use('/boards', boardRouter);

// // process.on('uncaughtException', loggerError);

// // process.on('unhandledRejection', loggerError);

// // app.use(loggerError);
// logger.info('info');

// app.use(errorValid);

// // process.on('uncaughtException', (error, origin) => {
// //   fs.appendFileSync(
// //     'errorWinston.log',
// //     `Exception origin: ${origin}\n Caught exception: ${error.stack}\n `
// //   );
// //   fs.writeSync(
// //     process.stderr.fd,
// //     `Exception origin: ${origin}\n Caught exception: ${error.stack}\n `
// //   );
// //   process.exit(1);
// // });
// throw Error('Oops!');

// // process.on('unhandledRejection', (reason, promise) => {
// //   loggerError;
// //   fs.appendFileSync(
// //     'errorWinston.log',
// //     `Unhandled Rejection at:', ${promise}\n 'reason:', ${reason}\n `
// //   );
// //   fs.writeSync(
// //     process.stderr.fd,
// //     `Unhandled Rejection at:', ${promise}\n 'reason:', ${reason}\n `
// //   );
// //   process.exit(1);
// // });
// // // Promise.reject(Error('Oops!'));

// export { app };
