/* eslint-disable default-case */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable consistent-return */
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { config } from '../../src/common/config';

const { SECRET_KEY } = config;

const verification = (req: Request, res: Response, next: NextFunction) => {
  if (req.path === '/login' || req.path === '/doc') {
    return next();
  }

  const authHeader = req.headers.authorization;

  if (authHeader !== undefined) {
    const [shema, token] = authHeader.split(' ');

    if (shema !== 'Bearer' || token === undefined) {
      res.status(401).send('WRONG SHEMA AUTARIZAATION!!!');
    } else {
      const verificationToken = jwt.verify(token, SECRET_KEY!);
      console.log(verificationToken);

      return next();
    }
  } else {
    res.status(401).send('WRONG HEADER AUTARISATION!!!');
  }
};

export { verification };
