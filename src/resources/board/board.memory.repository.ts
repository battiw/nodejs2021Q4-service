/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/ban-types */
import { getRepository } from 'typeorm';
import { Board } from '../../entity/Board';
// import { Task } from '../../entity/Tasks';

const getAllBoards = async () => {
  const boardsRepository = getRepository(Board);
  return boardsRepository.find({ where: {} });
};

const getBoardByID = async (id: string) => {
  const boardsRepository = getRepository(Board);
  return boardsRepository.findOne(id);
};

const createBoard = async (board: {
  id: string;
  title: string;
  columns: {}[];
}) => {
  const boardsRepository = getRepository(Board);
  const newBoard = boardsRepository.create(board);
  const addedBoard = boardsRepository.save(newBoard);
  return addedBoard;
};

const updateBoard = async (
  id: string,
  body: { id: string; title: string; columns: {}[] }
) => {
  const boardsRepository = getRepository(Board);
  boardsRepository.update(id, body);
  return body;
};

const deleteBoard = async (id: string) => {
  // const tasksRepository = getRepository(Task);
  // const arrayOfTasks = await tasksRepository.find({ where: { boardId: id } });
  // if (arrayOfTasks.length > 0) {
  //   for (let i = 0; i < arrayOfTasks.length; i += 1) {
  //     const idTasks = arrayOfTasks[i]!.id;
  //     tasksRepository.delete(idTasks);
  //   }
  // }

  const boardsRepository = getRepository(Board);
  const res = await boardsRepository.delete(id);
  return res.raw;
};

export const boardRepo = {
  getAllBoards,
  getBoardByID,
  createBoard,
  updateBoard,
  deleteBoard,
};
