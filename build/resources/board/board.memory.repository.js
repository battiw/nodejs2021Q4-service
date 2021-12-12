"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBoardMemory = exports.putBoardMemory = exports.getIDBoardsMemory = exports.postBoardMemory = exports.getAllBoardMemory = void 0;
const db_1 = require("../db");
const getAllBoardMemory = async () => db_1.dataArrayBoardDB;
exports.getAllBoardMemory = getAllBoardMemory;
const postBoardMemory = async (createBoard) => {
    db_1.dataArrayBoardDB.push(createBoard);
    return createBoard;
};
exports.postBoardMemory = postBoardMemory;
const getIDBoardsMemory = async (idBoardID) => {
    const idB = db_1.dataArrayBoardDB.find((item) => item.id === idBoardID);
    return idB;
};
exports.getIDBoardsMemory = getIDBoardsMemory;
const putBoardMemory = async (idBoardPut, createBorderPut) => {
    const objBoardPutindex = db_1.dataArrayBoardDB.findIndex((item) => item.id === idBoardPut);
    if (objBoardPutindex !== -1) {
        db_1.dataArrayBoardDB[objBoardPutindex] = createBorderPut;
    }
    return db_1.dataArrayBoardDB[objBoardPutindex];
};
exports.putBoardMemory = putBoardMemory;
const deleteBoardMemory = async (idBoardDelete) => {
    const boardIndex = db_1.dataArrayBoardDB.findIndex((el) => el.id === idBoardDelete);
    const board = db_1.dataArrayBoardDB[boardIndex];
    db_1.dataArrayBoardDB.splice(boardIndex, 1);
    // while (true) {
    while (db_1.dataArrayTasksDB.length !== 0) {
        const taskIndex = db_1.dataArrayTasksDB.findIndex((el) => el.boardId === idBoardDelete);
        if (taskIndex === -1)
            break;
        db_1.dataArrayTasksDB.splice(taskIndex, 1);
    }
    return board;
};
exports.deleteBoardMemory = deleteBoardMemory;
