"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserMemory = exports.putUserMemory = exports.getIDMemory = exports.postUserMemory = exports.getAllMemory = void 0;
const db_1 = require("../db");
const getAllMemory = async () => db_1.dataArrayDB;
exports.getAllMemory = getAllMemory;
const postUserMemory = async (createUser) => {
    db_1.dataArrayDB.push(createUser);
    return createUser;
};
exports.postUserMemory = postUserMemory;
const getIDMemory = async (idNumber) => {
    const idU = db_1.dataArrayDB.find((item) => item.id === idNumber);
    return idU;
};
exports.getIDMemory = getIDMemory;
const putUserMemory = async (createUserPut, idNumberPut) => {
    const pU = db_1.dataArrayDB.find((item) => item.id === idNumberPut);
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
exports.putUserMemory = putUserMemory;
const deleteUserMemory = async (idNumberDelete) => {
    const userIndex = db_1.dataArrayDB.findIndex((el) => el.id === idNumberDelete);
    for (let i = 0; i < db_1.dataArrayTasksDB.length; i += 1) {
        const taskIndex = db_1.dataArrayTasksDB.findIndex((el) => el.userId === idNumberDelete);
        if (taskIndex !== -1) {
            if (db_1.dataArrayTasksDB !== undefined) {
                db_1.dataArrayTasksDB[taskIndex] = {
                    ...db_1.dataArrayTasksDB[taskIndex],
                    userId: null,
                };
            }
        }
    }
    const deletedObj = { ...db_1.dataArrayDB[userIndex] };
    db_1.dataArrayDB.splice(userIndex, 1);
    return deletedObj;
};
exports.deleteUserMemory = deleteUserMemory;
