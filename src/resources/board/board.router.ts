// const router = require('express').Router({mergeParams: true});
import { Request, Response, Router } from 'express';

import { Board } from './board.model';
import {
  getAllBoardServis,
  postBoardServis,
  getIDBoardsServis,
  putBoardServis,
  deleteBoardServis,
} from './board.service';
import { routerTasks } from '../tasks/tasks.router';
// import { IBoard } from '../intefases';

const boardRouter = Router({ mergeParams: true });

boardRouter.use('/:boardId/tasks', routerTasks);

boardRouter.route('/').get(async (_req: Request, res: Response) => {
  const boardAll = await getAllBoardServis();
  res.status(200).json(boardAll);
});

boardRouter.route('/').post(async (req: Request, res: Response) => {
  const createBoard = req.body;
  const boardPost = await postBoardServis(createBoard);
  res.status(201).json(boardPost);
});

boardRouter.route('/:boardId').get(async (req: Request, res: Response) => {
  const idBoardID = req.params['boardId'];
  if (idBoardID !== undefined) {
    const boardsID = await getIDBoardsServis(idBoardID);
    if (!boardsID) {
      res.status(404).json();
    } else {
      res.status(200).json(boardsID);
    }
  }
});

boardRouter.route('/:boardId').put(async (req: Request, res: Response) => {
  const idBoardPut = req.params['boardId'];
  const createBorderPut = new Board(req.body);
  if (idBoardPut !== undefined) {
    const boardPut = await putBoardServis(idBoardPut, createBorderPut);
    res.status(200).json(boardPut);
  }
});

boardRouter.route('/:boardId').delete(async (req: Request, res: Response) => {
  const idBoardDelete = req.params['boardId'];
  if (idBoardDelete !== undefined) {
    const boardDelete = await deleteBoardServis(idBoardDelete);
    res.status(200).json(boardDelete);
  }
});

boardRouter.use('/*', (_req, res) => {
  return res.status(400).send('Incorrect path');
});

export { boardRouter };
