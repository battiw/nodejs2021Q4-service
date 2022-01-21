/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable consistent-return */
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { config } from '../../common/config';

const { SECRET_KEY } = config;

const verification = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.header('Authorization');

  if (authHeader !== undefined) {
    const tokenString = req.header('Authorization');

    const [shema, token] = tokenString!.split(' ');
    if (shema !== 'Bearer' || token === undefined || SECRET_KEY === undefined) {
      res.status(401).send('WRONG SHEMA AUTARATION!!!');
    } else {
      const verificationToken = jwt.verify(token, SECRET_KEY);
      console.log(verificationToken);
      console.log(`*****************************************************`);

      return next();
    }
  } else {
    res.status(401).send('WRONG HEADER AUTARISATION!!!');
  }
};

export { verification };
