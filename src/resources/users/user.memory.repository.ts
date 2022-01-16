import { getRepository } from 'typeorm';

import { IUser } from '../intefases';
import { User } from '../../entity/User';
import { Task } from '../../entity/Tasks';

/**
 * Function returns all users
 * @returns Promis array of users
 */
const getAllMemory = async () => {
  const userRepository = getRepository(User);
  const findAllUsers = await userRepository
    .createQueryBuilder('users')
    .select(['id', 'name', 'login'])
    .getRawMany();
  return findAllUsers;
};
/**
 * Function adds a user to the database
 * @param createUser - user with parameters
 * @returns Promis added user
 */
const postUserMemory = async (createUser: IUser) => {
  const user = new User();
  user.id = createUser.id;
  user.name = createUser.name;
  user.login = createUser.login;
  user.password = createUser.password;
  await getRepository(User).save(user);
  return createUser;
};

/**
 * Function search for a user with a given id
 * @param idNumber - id user
 * @returns Promis an user with the given id
 */
const getIDMemory = async (idNumber: string) => {
  const userRepositoryID = getRepository(User);
  const findIdUser = await userRepositoryID
    .createQueryBuilder('users')
    .select(['id', 'name', 'login'])
    .where('users.id = :id', { id: idNumber })
    .getRawOne();
  return findIdUser;
};

/**
 * Function changes user parameters with id
 * @param createUserPut - user with parameters
 * @param idNumberPut - id user
 * @returns Promis changed user data
 */
const putUserMemory = async (createUserPut: IUser, idNumberPut: string) => {
  const userRepositoryIDPut = getRepository(User);

  const fineputObject = await userRepositoryIDPut
    .createQueryBuilder()
    .update(User)
    .set({
      name: createUserPut.name,
      login: createUserPut.login,
      password: createUserPut.password,
    })
    .where('id = :id', { id: idNumberPut })
    .execute();
  return fineputObject;
};

/**
 * Function deletes user parameters with id and all his tasks
 * @param idNumberDelete - id user
 * @returns Promis remote user
 */
const deleteUserMemory = async (idNumberDelete: string) => {
  const userRepositoryIDdel = getRepository(User);

  const deleteObject = await userRepositoryIDdel
    .createQueryBuilder()
    .delete()
    .from(User)
    .where('id= :id', { id: idNumberDelete })
    .execute();

  // eslint-disable-next-line no-unreachable
  const userAllTaskDelete = getRepository(Task);

  const deleteAllTasks = await userAllTaskDelete

    .createQueryBuilder()
    .delete()
    .where('userId= :id', { id: idNumberDelete })
    .execute();

  console.log(deleteAllTasks);

  return deleteObject;

  // const userIndex = dataArrayDB.findIndex((el) => el.id === idNumberDelete);

  // for (let i = 0; i < dataArrayTasksDB.length; i += 1) {
  //   const taskIndex = dataArrayTasksDB.findIndex(
  //     (el) => el.userId === idNumberDelete
  //   );
  //   if (taskIndex !== -1) {
  //     if (dataArrayTasksDB !== undefined) {
  //       dataArrayTasksDB[taskIndex] = {
  //         ...dataArrayTasksDB[taskIndex],
  //         userId: null,
  //       };
  //     }
  //   }
  // }

  // const deletedObj = { ...dataArrayDB[userIndex] };

  // dataArrayDB.splice(userIndex, 1);

  // return deletedObj;
};
export {
  getAllMemory,
  postUserMemory,
  getIDMemory,
  putUserMemory,
  deleteUserMemory,
};
