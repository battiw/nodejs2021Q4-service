import { Request, Response, NextFunction } from 'express';
import { logger } from './WinstonLog/loggerWinston';

export default (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  logger.log('error', `StatusCode: ${err}`);
  res.status(500).send('Internal Server Error');
};
