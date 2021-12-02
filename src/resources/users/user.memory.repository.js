const dataArray = [];

const getAll = async () =>  dataArray;

const postUser = async ( createUser ) => {
  dataArray.push( createUser );
  return createUser;
};

const getID = async( idNumber ) => {
  const idU = dataArray.find(( item ) => item.id === idNumber );
  return idU;
};

const putUser = async ( idNumberPut, createUserPut ) => {
  const pU =  dataArray.find( item  => item.id === idNumberPut)
  pU.name = createUserPut.name;
  pU.login = createUserPut.login;
  pU.password = createUserPut.password;
  return pU;
};

const deleteUser = async( idNumberDelete ) => {
  const index = dataArray.findIndex((item) => item.id === idNumberDelete);
   dataArray.find( ( item ) => item.id === idNumberDelete)
    dataArray.splice( index, 1 );
  return dataArray;
};

module.exports = { getAll, postUser, getID, putUser, deleteUser };
