import { getAllMemory, postUserMemory, getIDMemory, putUserMemory, deleteUserMemory } from './user.memory.repository';
const getAllServis = () => getAllMemory();
const postUserServis = (createUser) => postUserMemory(createUser);
const getIDServis = (idNumber) => getIDMemory(idNumber);
const putUserServis = (idNumberPut, createUserPut) => putUserMemory(idNumberPut, createUserPut);
const deleteUserServis = (idNumberDelete) => deleteUserMemory(idNumberDelete);
export { getAllServis, postUserServis, getIDServis, putUserServis, deleteUserServis };
