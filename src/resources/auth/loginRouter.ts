import { Request, Response, Router } from 'express';
// import { User } from '../../entity/User';
import { servisLogin } from './lorinService';

const routerLogin = Router();

routerLogin.route('/').post(async (req: Request, res: Response) => {
  const loginReseive: string | undefined = req.body.login; // const login = "sjf" typeof string и тд
  const passwordReseive: string | undefined = req.body.password;

  const us = await servisLogin.singToken(loginReseive, passwordReseive);

  if (us === null || us === undefined) {
    res.status(403).json('WRONG');
  } else {
    res.status(201).json({ token: us });
  }
});

export { routerLogin };
