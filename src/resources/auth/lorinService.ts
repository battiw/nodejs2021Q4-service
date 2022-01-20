/* eslint-disable @typescript-eslint/no-non-null-assertion */
import jwt from 'jsonwebtoken';

import { repositoryLogin } from './loginData';

import { config } from '../../common/config';

const { SECRET_KEY } = config;

const singToken = async (loginReseive: string, passwordReseive: string) => {
  const u = await repositoryLogin.loginRepository(
    loginReseive,
    passwordReseive
  );

  if (!u) {
    return null;
    // eslint-disable-next-line no-else-return
  } else {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const idAdmin = u[0]!.id;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const loginAdmin = u[0]!.login;

    const token = jwt.sign({ idAdmin, loginAdmin }, SECRET_KEY!);

    return token;
  }
};

export const servisLogin = { singToken };
