import {
  getAllBoardMemory,
  postBoardMemory,
  getIDBoardsMemory,
  putBoardMemory,
  deleteBoardMemory,
} from './board.memory.repository';
import { IBoard } from '../intefases';

const getAllBoardServis = () => getAllBoardMemory();
const postBoardServis = (createBoard: IBoard) => postBoardMemory(createBoard);
const getIDBoardsServis = (idBoardID: string) => getIDBoardsMemory(idBoardID);
const putBoardServis = (idBoardPut: string, createBorderPut: IBoard) =>
  putBoardMemory(idBoardPut, createBorderPut);
const deleteBoardServis = (idBoardDelete: string) =>
  deleteBoardMemory(idBoardDelete);
export {
  getAllBoardServis,
  postBoardServis,
  getIDBoardsServis,
  putBoardServis,
  deleteBoardServis,
};
