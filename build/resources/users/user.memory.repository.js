import { dataArrayDB, dataArrayTasksDB } from '../db';
const getAllMemory = async () => dataArrayDB;
const postUserMemory = async (createUser) => {
    dataArrayDB.push(createUser);
    return createUser;
};
const getIDMemory = async (idNumber) => {
    const idU = dataArrayDB.find((item) => item.id === idNumber);
    return idU;
};
const putUserMemory = async (idNumberPut, createUserPut) => {
    const pU = dataArrayDB.find(item => item.id === idNumberPut);
    pU.name = createUserPut.name;
    pU.login = createUserPut.login;
    pU.password = createUserPut.password;
    return pU;
};
const deleteUserMemory = async (idNumberDelete) => {
    const userIndex = dataArrayDB.findIndex((el) => el.id === idNumberDelete);
    for (let i = 0; i < dataArrayTasksDB.length; i += 1) {
        const taskIndex = dataArrayTasksDB.findIndex((el) => el.userId === idNumberDelete);
        if (taskIndex !== -1) {
            dataArrayTasksDB[taskIndex] = {
                ...dataArrayTasksDB[taskIndex],
                userId: null,
            };
        }
    }
    const deletedObj = { ...dataArrayDB[userIndex] };
    dataArrayDB.splice(userIndex, 1);
    return deletedObj;
};
export { getAllMemory, postUserMemory, getIDMemory, putUserMemory, deleteUserMemory };
