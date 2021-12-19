import { dataArrayDB, dataArrayTasksDB } from '../db';
import { IUser } from '../intefases';

/**
 * Function returns all users
 * @returns Promis array of users
 */
const getAllMemory = async () => dataArrayDB;

/**
 * Function adds a user to the database
 * @param createUser - user with parameters
 * @returns Promis added user
 */
const postUserMemory = async (createUser: IUser) => {
  dataArrayDB.push(createUser);
  return createUser;
};

/**
 * Function search for a user with a given id
 * @param idNumber - id user
 * @returns Promis an user with the given id
 */
const getIDMemory = async (idNumber: string) => {
  const idU = dataArrayDB.find((item: IUser) => item.id === idNumber);
  return idU;
};

/**
 * Function changes user parameters with id
 * @param createUserPut - user with parameters
 * @param idNumberPut - id user
 * @returns Promis changed user data
 */
const putUserMemory = async (createUserPut: IUser, idNumberPut: string) => {
  const pU = dataArrayDB.find((item) => item.id === idNumberPut);
  if (pU !== undefined) {
    pU.name = createUserPut.name;
    pU.login = createUserPut.login;
    pU.password = createUserPut.password;
  }
  return pU;
};

/**
 * Function deletes user parameters with id and all his tasks
 * @param idNumberDelete - id user
 * @returns Promis remote user
 */
const deleteUserMemory = async (idNumberDelete: string) => {
  const userIndex = dataArrayDB.findIndex((el) => el.id === idNumberDelete);

  for (let i = 0; i < dataArrayTasksDB.length; i += 1) {
    const taskIndex = dataArrayTasksDB.findIndex(
      (el) => el.userId === idNumberDelete
    );
    if (taskIndex !== -1) {
      if (dataArrayTasksDB !== undefined) {
        dataArrayTasksDB[taskIndex] = {
          ...dataArrayTasksDB[taskIndex],
          userId: null,
        };
      }
    }
  }

  const deletedObj = { ...dataArrayDB[userIndex] };

  dataArrayDB.splice(userIndex, 1);

  return deletedObj;
};
export {
  getAllMemory,
  postUserMemory,
  getIDMemory,
  putUserMemory,
  deleteUserMemory,
};
