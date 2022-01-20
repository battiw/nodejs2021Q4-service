/* eslint-disable no-return-await */
import { getRepository } from 'typeorm';

import { User } from '../../entity/User';

const loginRepository = async (
  loginReseive: string,
  passwordReseive: string
) => {
  const findProp = getRepository(User);
  // return findProp.findOne({ loginReseive });
  const aaaa = await findProp.find({
    where: { login: loginReseive, password: passwordReseive },
  });
  console.log(`aaaa`);
  console.log(aaaa);
  if (!aaaa) {
    console.log(`;dffd,`);
  }

  return aaaa;
};

export const repositoryLogin = { loginRepository };
