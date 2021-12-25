import Express, { Request, Response, NextFunction } from 'express';

const app = Express();

function errorValid() {
  app.use(function (
    err: Error,
    _req: Request,
    res: Response,
    _next: NextFunction
  ) {
    console.error(`err.stack=> ${err.stack}`);
    res.status(500).send('Something broke!');
  });
}

export { errorValid };
