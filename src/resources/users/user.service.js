const usersRepo = require('./user.memory.repository');

const getAllServis = () => usersRepo.getAllMemory();
const postUserServis = ( createUser ) => usersRepo.postUserMemory( createUser );
const getIDServis = ( idNumber ) => usersRepo.getIDMemory( idNumber );
const putUserServis = ( idNumberPut, createUserPut ) => usersRepo.putUserMemory( idNumberPut, createUserPut );
const deleteUserServis = ( idNumberDelete ) => usersRepo.deleteUserMemory( idNumberDelete );



module.exports = { getAllServis, postUserServis, getIDServis, putUserServis, deleteUserServis};
