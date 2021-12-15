"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBoardMemory = exports.putBoardMemory = exports.getIDBoardsMemory = exports.postBoardMemory = exports.getAllBoardMemory = void 0;
const db_1 = require("../db");
/**
 * Function returns all boards
 * @returns Promis array of boards
 */
const getAllBoardMemory = async () => db_1.dataArrayBoardDB;
exports.getAllBoardMemory = getAllBoardMemory;
/**
 *Function adds a board to the database
 * @param createBoard - board with parameters
 * @returns Promis added board
 */
const postBoardMemory = async (createBoard) => {
    db_1.dataArrayBoardDB.push(createBoard);
    return createBoard;
};
exports.postBoardMemory = postBoardMemory;
/**
 *Function search for a board with a given id
 * @param idBoardID - id board
 * @returns Promis an board with the given id
 */
const getIDBoardsMemory = async (idBoardID) => {
    const idB = db_1.dataArrayBoardDB.find((item) => item.id === idBoardID);
    return idB;
};
exports.getIDBoardsMemory = getIDBoardsMemory;
/**
 *Function changes board parameters with id
 * @param idBoardPut - id board
 * @param createBorderPut - board with parameters
 * @returns Promis changed board data
 */
const putBoardMemory = async (idBoardPut, createBorderPut) => {
    const objBoardPutindex = db_1.dataArrayBoardDB.findIndex((item) => item.id === idBoardPut);
    if (objBoardPutindex !== -1) {
        db_1.dataArrayBoardDB[objBoardPutindex] = createBorderPut;
    }
    return db_1.dataArrayBoardDB[objBoardPutindex];
};
exports.putBoardMemory = putBoardMemory;
/**
 *Function deletes board parameters with id and all his tasks
 * @param idBoardDelete - id board
 * @returns Promis remote board
 */
const deleteBoardMemory = async (idBoardDelete) => {
    const boardIndex = db_1.dataArrayBoardDB.findIndex((el) => el.id === idBoardDelete);
    const board = db_1.dataArrayBoardDB[boardIndex];
    db_1.dataArrayBoardDB.splice(boardIndex, 1);
    while (db_1.dataArrayTasksDB.length !== 0) {
        const taskIndex = db_1.dataArrayTasksDB.findIndex((el) => el.boardId === idBoardDelete);
        if (taskIndex === -1)
            break;
        db_1.dataArrayTasksDB.splice(taskIndex, 1);
    }
    return board;
};
exports.deleteBoardMemory = deleteBoardMemory;
