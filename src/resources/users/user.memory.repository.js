const {dataArray, dataArrayTasks} = require('../db');

const getAllMemory = async () =>  dataArray;

const postUserMemory = async ( createUser ) => {
  dataArray.push( createUser );
  return createUser;
};

const getIDMemory = async( idNumber ) => {
  const idU = dataArray.find(( item ) => item.id === idNumber );
  return idU;
};

const putUserMemory = async ( idNumberPut, createUserPut ) => {
  const pU =  dataArray.find( item  => item.id === idNumberPut)
  pU.name = createUserPut.name;
  pU.login = createUserPut.login;
  pU.password = createUserPut.password;
  return pU;
};

const deleteUserMemory = async (idNumberDelete) => {
  const userIndex = dataArray.findIndex((el) => el.id === idNumberDelete);

  for (let i = 0; i < dataArrayTasks.length; i += 1) {
    const taskIndex = dataArrayTasks.findIndex(
      (el) => el.userId === idNumberDelete
    );
    if (taskIndex !== -1) {
      dataArrayTasks[taskIndex] = {
        ...dataArrayTasks[taskIndex],
        userId: null,
      };
    }
  }

  const deletedObj = { ...dataArray[userIndex] };

  dataArray.splice(userIndex, 1);

  return deletedObj;
};
module.exports = { getAllMemory, postUserMemory, getIDMemory, putUserMemory, deleteUserMemory };
