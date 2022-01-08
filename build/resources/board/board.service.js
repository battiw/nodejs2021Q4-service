"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBoardServis = exports.putBoardServis = exports.getIDBoardsServis = exports.postBoardServis = exports.getAllBoardServis = void 0;
const board_memory_repository_1 = require("./board.memory.repository");
/**
 * Service function
 * @returns function call result getAllBoardMemory
 */
const getAllBoardServis = () => (0, board_memory_repository_1.getAllBoardMemory)();
exports.getAllBoardServis = getAllBoardServis;
/**
 * Service function
 * @param createBoard  - board with parameters
 * @returns function call result postBoardMemory
 */
const postBoardServis = (createBoard) => (0, board_memory_repository_1.postBoardMemory)(createBoard);
exports.postBoardServis = postBoardServis;
/**
 * Service function
 * @param idBoardID -  id board
 * @returns function call result getIDBoardsMemory
 */
const getIDBoardsServis = (idBoardID) => (0, board_memory_repository_1.getIDBoardsMemory)(idBoardID);
exports.getIDBoardsServis = getIDBoardsServis;
/**
 * Service function
 * @param idBoardPut - id board
 * @param createBorderPut - board with parameters
 * @returns function call result putBoardMemory
 */
const putBoardServis = (idBoardPut, createBorderPut) => (0, board_memory_repository_1.putBoardMemory)(idBoardPut, createBorderPut);
exports.putBoardServis = putBoardServis;
/**
 * Service function
 * @param idBoardDelete - id board
 * @returns function call result deleteBoardMemory
 */
const deleteBoardServis = (idBoardDelete) => (0, board_memory_repository_1.deleteBoardMemory)(idBoardDelete);
exports.deleteBoardServis = deleteBoardServis;
