import { IUser } from '../intefases';
import {
  getAllMemory,
  postUserMemory,
  getIDMemory,
  putUserMemory,
  deleteUserMemory,
} from './user.memory.repository';

/**
 * Service function
 * @returns function call result getAllMemory
 */
const getAllServis = () => getAllMemory();

/**
 * Service function
 * @param createUser  - user with parameters
 * @returns function call result postUserMemory
 */
const postUserServis = (createUser: IUser) => postUserMemory(createUser);

/**
 * Service function
 * @param idNumber -  id user
 * @returns function call result getIDMemory
 */
const getIDServis = (idNumber: string) => getIDMemory(idNumber);

/**
 * Service function
 * @param createUserPut - user with parameters
 * @param idNumberPut - id user
 * @returns function call result putUserMemory
 */
const putUserServis = (createUserPut: IUser, idNumberPut: string) =>
  putUserMemory(createUserPut, idNumberPut);

/**
 * Service function
 * @param idNumberDelete - id user
 * @returns function call result deleteUserMemory
 */
const deleteUserServis = (idNumberDelete: string) =>
  deleteUserMemory(idNumberDelete);

export {
  getAllServis,
  postUserServis,
  getIDServis,
  putUserServis,
  deleteUserServis,
};
