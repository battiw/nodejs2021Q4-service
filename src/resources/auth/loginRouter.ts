import { Request, Response, Router } from 'express';
// import { User } from '../../entity/User';
import { servisLogin } from './lorinService';

const routerLogin = Router();

routerLogin.route('/').post(async (req: Request, res: Response) => {
  const loginReseive = req.body.login; // const login = "sjf" typeof string и тд
  const passwordReseive = req.body.password;

  const us = await servisLogin.singToken(loginReseive, passwordReseive);
  if (!us) {
    res.status(403).json('WRONG');
  } else {
    res.status(201).json(us);
  }
});

export { routerLogin };
