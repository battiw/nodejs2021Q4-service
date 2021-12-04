const dataArray = [];

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

const deleteUserMemory = async( idNumberDelete ) => {
  const index = dataArray.findIndex((item) => item.userID === idNumberDelete);
   dataArray.find( ( item ) => item.userID === idNumberDelete)
    dataArray.splice( index, 1 );
  return dataArray;
};

module.exports = { getAllMemory, postUserMemory, getIDMemory, putUserMemory, deleteUserMemory };
