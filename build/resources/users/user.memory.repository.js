"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserMemory = exports.putUserMemory = exports.getIDMemory = exports.postUserMemory = exports.getAllMemory = void 0;
const db_1 = require("../db");
/**
 * Function returns all users
 * @returns Promis array of users
 */
const getAllMemory = async () => db_1.dataArrayDB;
exports.getAllMemory = getAllMemory;
/**
 * Function adds a user to the database
 * @param createUser - user with parameters
 * @returns Promis added user
 */
const postUserMemory = async (createUser) => {
    db_1.dataArrayDB.push(createUser);
    return createUser;
};
exports.postUserMemory = postUserMemory;
/**
 * Function search for a user with a given id
 * @param idNumber - id user
 * @returns Promis an user with the given id
 */
const getIDMemory = async (idNumber) => {
    const idU = db_1.dataArrayDB.find((item) => item.id === idNumber);
    return idU;
};
exports.getIDMemory = getIDMemory;
/**
 * Function changes user parameters with id
 * @param createUserPut - user with parameters
 * @param idNumberPut - id user
 * @returns Promis changed user data
 */
const putUserMemory = async (createUserPut, idNumberPut) => {
    const pU = db_1.dataArrayDB.find((item) => item.id === idNumberPut);
    if (pU !== undefined) {
        pU.name = createUserPut.name;
        pU.login = createUserPut.login;
        pU.password = createUserPut.password;
    }
    return pU;
};
exports.putUserMemory = putUserMemory;
/**
 * Function deletes user parameters with id and all his tasks
 * @param idNumberDelete - id user
 * @returns Promis remote user
 */
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
