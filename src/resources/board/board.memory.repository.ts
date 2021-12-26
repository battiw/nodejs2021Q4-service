import { dataArrayBoardDB, dataArrayTasksDB } from '../db';
import { IBoard } from '../intefases';

/**
 * Function returns all boards
 * @returns Promis array of boards
 */
const getAllBoardMemory = async () => dataArrayBoardDB;

/**
 *Function adds a board to the database
 * @param createBoard - board with parameters
 * @returns Promis added board
 */
const postBoardMemory = async (createBoard: IBoard) => {
  dataArrayBoardDB.push(createBoard);
  return createBoard;
};

/**
 *Function search for a board with a given id
 * @param idBoardID - id board
 * @returns Promis an board with the given id
 */
const getIDBoardsMemory = async (idBoardID: string) => {
  const idB = dataArrayBoardDB.find(
    (item: { id: string }) => item.id === idBoardID
  );
  return idB;
};

/**
 *Function changes board parameters with id
 * @param idBoardPut - id board
 * @param createBorderPut - board with parameters
 * @returns Promis changed board data
 */
const putBoardMemory = async (idBoardPut: string, createBorderPut: IBoard) => {
  const objBoardPutindex = dataArrayBoardDB.findIndex(
    (item: { id: string }) => item.id === idBoardPut
  );
  if (objBoardPutindex !== -1) {
    dataArrayBoardDB[objBoardPutindex] = createBorderPut;
  }
  return dataArrayBoardDB[objBoardPutindex];
};

/**
 *Function deletes board parameters with id and all his tasks
 * @param idBoardDelete - id board
 * @returns Promis remote board
 */
const deleteBoardMemory = async (idBoardDelete: string) => {
  const boardIndex = dataArrayBoardDB.findIndex(
    (el: { id: string }) => el.id === idBoardDelete
  );
  const board = dataArrayBoardDB[boardIndex];
  dataArrayBoardDB.splice(boardIndex, 1);

  while (dataArrayTasksDB.length !== 0) {
    const taskIndex = dataArrayTasksDB.findIndex(
      (el) => el.boardId === idBoardDelete
    );
    if (taskIndex === -1) break;
    dataArrayTasksDB.splice(taskIndex, 1);
  }
  return board;
};

export {
  getAllBoardMemory,
  postBoardMemory,
  getIDBoardsMemory,
  putBoardMemory,
  deleteBoardMemory,
};
