/* eslint-disable @typescript-eslint/ban-types */
import { boardRepo } from './board.memory.repository';

const allBoards = () => boardRepo.getAllBoards();

const boardByID = (id: string) => boardRepo.getBoardByID(id);

const createdBoard = (board: { id: string; title: string; columns: {}[] }) =>
  boardRepo.createBoard(board);

const updatedBoard = (
  id: string,
  body: { id: string; title: string; columns: {}[] }
) => boardRepo.updateBoard(id, body);

const deletedBoard = (id: string) => boardRepo.deleteBoard(id);

export const boardsService = {
  allBoards,
  boardByID,
  createdBoard,
  updatedBoard,
  deletedBoard,
};
