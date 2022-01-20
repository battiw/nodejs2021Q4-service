/* eslint-disable no-return-await */
import { getRepository } from 'typeorm';

import { User } from '../../entity/User';

const loginRepository = async (
  loginReseive: string,
  passwordReseive: string
) => {
  const findProp = getRepository(User);
  const aaaa = await findProp.find({
    where: { login: loginReseive, password: passwordReseive },
  });
  console.log(aaaa);

  return aaaa;
};

export const repositoryLogin = { loginRepository };
