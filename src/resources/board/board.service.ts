import {
  getAllBoardMemory,
  postBoardMemory,
  getIDBoardsMemory,
  putBoardMemory,
  deleteBoardMemory,
} from './board.memory.repository';
import { IBoard } from '../intefases';

/**
 * Service function
 * @returns function call result getAllBoardMemory
 */
const getAllBoardServis = () => getAllBoardMemory();

/**
 * Service function
 * @param createBoard  - board with parameters
 * @returns function call result postBoardMemory
 */
const postBoardServis = (createBoard: IBoard) => postBoardMemory(createBoard);

/**
 * Service function
 * @param idBoardID -  id board
 * @returns function call result getIDBoardsMemory
 */
const getIDBoardsServis = (idBoardID: string) => getIDBoardsMemory(idBoardID);

/**
 * Service function
 * @param idBoardPut - id board
 * @param createBorderPut - board with parameters
 * @returns function call result putBoardMemory
 */
const putBoardServis = (idBoardPut: string, createBorderPut: IBoard) =>
  putBoardMemory(idBoardPut, createBorderPut);

/**
 * Service function
 * @param idBoardDelete - id board
 * @returns function call result deleteBoardMemory
 */
const deleteBoardServis = (idBoardDelete: string) =>
  deleteBoardMemory(idBoardDelete);

export {
  getAllBoardServis,
  postBoardServis,
  getIDBoardsServis,
  putBoardServis,
  deleteBoardServis,
};
