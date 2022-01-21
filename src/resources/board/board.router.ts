import { Router } from 'express';
import { Board } from '../../entity/Board';
import { boardsService } from './board.service';
import { taskRouter } from '../tasks/tasks.router';

const routerBoard = Router();

routerBoard.use('/:boardId/tasks', taskRouter);

routerBoard.route('/').get(async (_req, res) => {
  const boards = await boardsService.allBoards();
  res.status(200).json(boards);
});

routerBoard.route('/:boardId').get(async (req, res) => {
  const id = req.params.boardId;
  const boardID = await boardsService.boardByID(id);
  if (!boardID) {
    res.status(404).json();
  } else {
    res.status(200).json(boardID);
  }
});

routerBoard.route('/').post(async (req, res) => {
  const addedBoard = await boardsService.createdBoard(new Board(req.body));
  res.status(201).json(addedBoard);
});

routerBoard.route('/:boardId').put(async (req, res) => {
  const id = req.params.boardId;
  const { body } = req;
  const changedBoard = await boardsService.updatedBoard(id, body);

  res.status(200).json(changedBoard);
});

routerBoard.route('/:boardId').delete(async (req, res) => {
  const id = req.params.boardId;
  const deletedBoard = await boardsService.deletedBoard(id);
  res.status(200).json(deletedBoard);
});

export { routerBoard };
