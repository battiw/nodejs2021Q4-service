/* eslint-disable no-else-return */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import jwt from 'jsonwebtoken';

import { repositoryLogin } from './loginData';

import { config } from '../../common/config';

import { chekHashedPassword } from '../../hashHelper/chekHash';

const { SECRET_KEY } = config;

const singToken = async (loginReseive: string, passwordReseive: string) => {
  const u = await repositoryLogin.loginRepository(
    loginReseive,
    passwordReseive
  );

  console.log(`u`);
  console.log(u);

  if (!u) {
    return null;
  } else {
    console.log(`hello`);
    const passAdminHach = u[0]!.password;

    console.log(`passAdminHach`);
    console.log(passAdminHach);
    console.log(`passwordReseive`);
    console.log(passwordReseive);

    const idAdmin = u[0]!.id;
    const loginAdmin = u[0]!.login;

    const comparison = await chekHashedPassword(passwordReseive, passAdminHach);
    console.log(`comparison`);
    console.log(comparison);

    if (comparison!) {
      console.log(`hello2`);
      const token = jwt.sign({ idAdmin, loginAdmin }, SECRET_KEY!);
      return token;
    } else {
      console.log(`hello3`);
      return null;
    }
  }
};

export const servisLogin = { singToken };
