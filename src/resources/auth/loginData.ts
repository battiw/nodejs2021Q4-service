/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable consistent-return */
/* eslint-disable no-return-await */
import { getRepository } from 'typeorm';

import { User } from '../../entity/User';

const loginRepository = async (
  loginReseive?: string,
  _passwordReseive?: string
): Promise<User[] | undefined> => {
  const findProp = getRepository(User);
  const aaaa: User[] = await findProp.find({
    where: { login: loginReseive },
  });
  return aaaa;
};

export const repositoryLogin = { loginRepository };
