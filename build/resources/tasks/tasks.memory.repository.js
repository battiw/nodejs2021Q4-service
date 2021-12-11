"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putTaskMemory = exports.deleteTaskMemory = exports.getIdTaskMemory = exports.postTasksMemory = exports.getTasks = void 0;
const db_1 = require("../db");
const getTasks = async () => db_1.dataArrayTasksDB;
exports.getTasks = getTasks;
const postTasksMemory = async (createTasks) => {
    db_1.dataArrayTasksDB.push(createTasks);
    return createTasks;
};
exports.postTasksMemory = postTasksMemory;
const getIdTaskMemory = async (idTasks) => {
    const searchIdTasks = db_1.dataArrayTasksDB.find((item) => item.id === idTasks);
    return searchIdTasks;
};
exports.getIdTaskMemory = getIdTaskMemory;
const putTaskMemory = async (createPutTasks, idputTasks) => {
    const objTasksPutindex = db_1.dataArrayTasksDB.findIndex((item) => item.id === idputTasks);
    if (objTasksPutindex !== -1) {
        db_1.dataArrayTasksDB[objTasksPutindex] = createPutTasks;
    }
    return db_1.dataArrayTasksDB[objTasksPutindex];
};
exports.putTaskMemory = putTaskMemory;
const deleteTaskMemory = async (idTasksDel) => {
    const searchDelTasksIndex = db_1.dataArrayTasksDB.findIndex((item) => item.id === idTasksDel);
    const searchDelTasksItem = db_1.dataArrayTasksDB.find((item) => item.id === idTasksDel);
    db_1.dataArrayTasksDB.splice(searchDelTasksIndex, 1);
    return searchDelTasksItem;
};
exports.deleteTaskMemory = deleteTaskMemory;
