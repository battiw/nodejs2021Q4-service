import Express from 'express';
import SwaggerUI from 'swagger-ui-express';
import pathToSwagg from 'path';
import YAML from 'yamljs';

import { routerUser } from './resources/users/user.router';
import { boardRouter } from './resources/board/board.router';

const app = Express();
const swaggerDocument = YAML.load(
  pathToSwagg.join(__dirname, '../doc/api.yaml')
);

app.use(Express.json());

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
