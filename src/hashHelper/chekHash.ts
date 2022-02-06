/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as bcrypt from 'bcrypt';

const hashPassword = async (password: string) => {
  const saltOrRounds = Number(process.env['DEFAULT_SALT_ROUND']);
  const hash = await bcrypt.hash(password, saltOrRounds);
  return hash;
};

const chekHashedPassword = async (password: string | Buffer, hash: string) => {
  const resComparisonPassword = await bcrypt.compare(password, hash);
  if (!resComparisonPassword) {
    console.log(`Password not Found`);
    return undefined;
  } else {
    return resComparisonPassword;
  }
};

export { hashPassword, chekHashedPassword };
