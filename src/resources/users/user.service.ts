import { IUser } from '../intefases';
import {
  getAllMemory,
  postUserMemory,
  getIDMemory,
  putUserMemory,
  deleteUserMemory,
} from './user.memory.repository';

const getAllServis = () => getAllMemory();
const postUserServis = (createUser: IUser) => postUserMemory(createUser);
const getIDServis = (idNumber: string) => getIDMemory(idNumber);
const putUserServis = (createUserPut: IUser, idNumberPut: string) =>
  putUserMemory(createUserPut, idNumberPut);
const deleteUserServis = (idNumberDelete: string) =>
  deleteUserMemory(idNumberDelete);

export {
  getAllServis,
  postUserServis,
  getIDServis,
  putUserServis,
  deleteUserServis,
};
