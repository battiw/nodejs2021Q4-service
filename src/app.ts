import Express from 'express';
import SwaggerUI from 'swagger-ui-express';
import pathToSwagg from 'path';
import YAML from 'yamljs';

// import { logger } from './log/logger'; //simple logging
// import { finished } from 'stream'; // simple logging
// import * as fs from 'fs'; // simple logging
import morgan from 'morgan'; // Morgan logging
import { createWriteStream } from 'fs'; // Morgan loggin

import { routerUser } from './resources/users/user.router';
import { boardRouter } from './resources/board/board.router';

const app = Express();
const swaggerDocument = YAML.load(
  pathToSwagg.join(__dirname, '../doc/api.yaml')
);

app.use(Express.json());

// app.use(logger); // simple logging

app.use(
  morgan('combined', {
    stream: createWriteStream('./src/log/loggerMorgan.log'),
  })
); // Morgan logging all
app.use(
  morgan('combined', {
    skip: function (_req, res) {
      return res.statusCode < 400;
    },
    stream: createWriteStream('./src/log/loggerMorganError.log'),
  })
); // Morgan logging error

app.use('/doc', SwaggerUI.serve, SwaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', routerUser);

app.use('/boards', boardRouter);

export { app };
