/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-else-return */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import jwt from 'jsonwebtoken';

import { repositoryLogin } from './loginData';

import { config } from '../../common/config';

import { chekHashedPassword } from '../../hashHelper/chekHash';
import { User } from '../../entity/User';

const { SECRET_KEY } = config;

const singToken = async (
  loginReseive?: string,
  passwordReseive?: string
): Promise<User[] | string | undefined | null> => {
  const u = await repositoryLogin.loginRepository(
    loginReseive,
    passwordReseive
  );

  if (u === undefined) {
    return null;
  } else {
    const passAdminHach = u[0]?.password;
    if (
      passAdminHach &&
      passwordReseive !== undefined &&
      SECRET_KEY !== undefined
    ) {
      const idAdmin = u[0]?.id;
      const loginAdmin = u[0]?.login;
      const comparison = await chekHashedPassword(
        passwordReseive,
        passAdminHach
      );
      if (comparison) {
        const token = jwt.sign({ idAdmin, loginAdmin }, SECRET_KEY);
        return token;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
};
export const servisLogin = { singToken };
