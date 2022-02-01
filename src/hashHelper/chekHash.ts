/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as bcrypt from 'bcrypt';
// import { config } from '../common/config';

// const { DEFAULT_SALT_ROUND } = config;

const hashPassword = async (password: string) => {
  const saltOrRounds = 10;
  const hash = await bcrypt.hash(password, saltOrRounds);
  return hash;
};

const chekHashedPassword = async (password: string | Buffer, hash: string) => {
  const s = await bcrypt.compare(password, hash);
  if (!s) {
    console.log(`Password not Found`);
    return undefined;
  } else {
    return s;
  }
};

export { hashPassword, chekHashedPassword };
