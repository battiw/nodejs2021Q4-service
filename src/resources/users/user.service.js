const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const postUser = ( createUser ) => usersRepo.postUser( createUser );
const getID = ( idNumber ) => usersRepo.getID( idNumber );
const putUser = ( idNumberPut, createUserPut ) => usersRepo.putUser( idNumberPut, createUserPut );
const deleteUser = ( idNumberDelete ) => usersRepo.deleteUser( idNumberDelete );



module.exports = { getAll, postUser, getID, putUser, deleteUser};
