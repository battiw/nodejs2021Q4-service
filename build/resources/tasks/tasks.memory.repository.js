"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putTaskMemory = exports.deleteTaskMemory = exports.getIdTaskMemory = exports.postTasksMemory = exports.getTasks = void 0;
const db_1 = require("../db");
/**
 * Function returns all tasks
 * @returns Promis array of tasks
 */
const getTasks = async () => db_1.dataArrayTasksDB;
exports.getTasks = getTasks;
/**
 * Function adds a task to the database
 * @param createTasks - task with parameters
 * @returns Promis added task
 */
const postTasksMemory = async (createTasks) => {
    db_1.dataArrayTasksDB.push(createTasks);
    return createTasks;
};
exports.postTasksMemory = postTasksMemory;
/**
 * Function search for a task with a given id
 * @param idTasks - id task
 * @returns Promis an task with the given id
 */
const getIdTaskMemory = async (idTasks) => {
    const searchIdTasks = db_1.dataArrayTasksDB.find((item) => item.id === idTasks);
    return searchIdTasks;
};
exports.getIdTaskMemory = getIdTaskMemory;
/**
 * Function changes user parameters with id
 * @param createPutTasks - task with parameters
 * @param idputTasks - id task
 * @returns Promis changed task data
 */
const putTaskMemory = async (createPutTasks, idputTasks) => {
    const objTasksPutindex = db_1.dataArrayTasksDB.findIndex((item) => item.id === idputTasks);
    if (objTasksPutindex !== -1) {
        db_1.dataArrayTasksDB[objTasksPutindex] = createPutTasks;
    }
    return db_1.dataArrayTasksDB[objTasksPutindex];
};
exports.putTaskMemory = putTaskMemory;
/**
 * Function deletes task parameters with id
 * @param idTasksDel - id task
 * @returns Promis remote task
 */
const deleteTaskMemory = async (idTasksDel) => {
    const searchDelTasksIndex = db_1.dataArrayTasksDB.findIndex((item) => item.id === idTasksDel);
    const searchDelTasksItem = db_1.dataArrayTasksDB.find((item) => item.id === idTasksDel);
    db_1.dataArrayTasksDB.splice(searchDelTasksIndex, 1);
    return searchDelTasksItem;
};
exports.deleteTaskMemory = deleteTaskMemory;
