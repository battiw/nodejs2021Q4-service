import { dataArrayDB, dataArrayTasksDB } from '../db';
import { IUser } from '../intefases';

const getAllMemory = async () => dataArrayDB;

const postUserMemory = async (createUser: IUser) => {
  dataArrayDB.push(createUser);
  return createUser;
};

const getIDMemory = async (idNumber: string) => {
  const idU = dataArrayDB.find((item: IUser) => item.id === idNumber);
  return idU;
};

const putUserMemory = async (createUserPut: IUser, idNumberPut: string) => {
  const pU = dataArrayDB.find((item) => item.id === idNumberPut);
  if (pU !== undefined) {
    pU.name = createUserPut.name;
    pU.login = createUserPut.login;
    pU.password = createUserPut.password;
  }
  return pU;

  // const objUserPutIndex = dataArrayDB.findIndex(
  //   (item) => item.id === idNumberPut
  // );
  // if (objUserPutIndex !== -1) {
  //   dataArrayDB[objUserPutIndex] = createUserPut;
  // }
  // return dataArrayDB[objUserPutIndex];
};

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
