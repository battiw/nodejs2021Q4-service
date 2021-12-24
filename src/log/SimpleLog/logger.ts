import { finished } from 'stream';
import * as fs from 'fs';
import { Request, Response, NextFunction } from 'express';

function logger(req: Request, res: Response, next: NextFunction) {
  const { method, url } = req;
  const start = Date.now();
  const bodyBody = JSON.stringify(req.body);
  const bodyQuery = JSON.stringify(req.query);

  next();

  finished(res, () => {
    const ms = Date.now() - start;
    const timeStart = Date();
    const { statusCode } = res;
    fs.appendFile(
      './src/log/logger.log',
      ` "TIME START" => ${timeStart}\n "METHOD" => ${method}\n "URL" => ${url}\n "QUERY PARAMETERS" => ${bodyQuery}\n "BODY" => ${bodyBody}\n "STATUS CODE" => ${statusCode}\n "WORKING HOURS" => [${ms}ms]\n \n`,
      (error) => {
        if (error) throw error;
      }
    );
    if (statusCode === 404) {
      fs.appendFile(
        './src/log/loggerError.log',
        ` "TIME START" => ${timeStart}\n "METHOD" => ${method}\n "URL" => ${url}\n "QUERY PARAMETERS" => ${bodyQuery}\n "BODY" => ${bodyBody}\n "STATUS CODE" => ${statusCode}\n "WORKING HOURS" => [${ms}ms]\n \n`,
        (error) => {
          if (error) throw error;
        }
      );
    }

    console.log(
      ` "TIME START" => ${timeStart}\n "METHOD" => ${method}\n "URL" => ${url}\n "QUERY PARAMETERS" => ${bodyQuery}\n "BODY" => ${bodyBody}\n "STATUS CODE" => ${statusCode}\n "WORKING HOURS" => [${ms}ms] \n \n`
    );
  });
}

export { logger };
