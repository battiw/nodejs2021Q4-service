/* eslint-disable @typescript-eslint/no-non-null-assertion */
import bcrypt from 'bcrypt';
import { config } from '../common/config';

const { DEFAULT_SALT_ROUND } = config;

const hashPassword = async (password: string) => {
  const hash = await bcrypt.hash(password, Number(DEFAULT_SALT_ROUND));
  //   const hash = await bcrypt.hash(password, DEFAULT_SALT_ROUND!);

  return hash;
};

const chekHashedPassword = async (password: string | Buffer, hash: string) => {
  const s = await bcrypt.compare(password, hash);
  return s;
};

export { hashPassword, chekHashedPassword };
