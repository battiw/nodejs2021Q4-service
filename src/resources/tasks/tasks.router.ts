// const routerTasks = require('express').Router({mergeParams: true});
import 'reflect-metadata';

import { Request, Response, Router } from 'express';

import { Task } from '../../entity/Tasks';
// import { Task } from './tasks.model';
import {
  getAllTasks,
  postTaskServis,
  getIdTaskServis,
  deleteTaskServis,
  putTaskServis,
} from './tasks.service';

const routerTasks = Router({ mergeParams: true });

routerTasks.route('/').get(async (_req: Request, res: Response) => {
  const tasksAll = await getAllTasks();
  res.status(200).json(tasksAll);
});

routerTasks.route('/').post(async (req: Request, res: Response) => {
  const idBoardTask = req.params;
  console.log(idBoardTask);
  console.log(req.body);

  const createTasks = new Task({ ...req.body, ...idBoardTask });
  const tasksPost = await postTaskServis(createTasks);
  res.status(201).json(tasksPost);
});

routerTasks.route('/:taskId').get(async (req: Request, res: Response) => {
  const idTasks = req.params['taskId'];
  if (idTasks !== undefined) {
    const tasksgetId = await getIdTaskServis(idTasks);
    if (!tasksgetId) {
      res.status(404).json();
    } else {
      res.status(200).json(tasksgetId);
    }
  }
});

routerTasks.route('/:taskId').put(async (req: Request, res: Response) => {
  const idputTasks = req.params['taskId'];
  const createPutTasks = new Task(req.body);
  if (idputTasks !== undefined) {
    const tasksPut = await putTaskServis(createPutTasks, idputTasks);
    res.status(200).json(tasksPut);
  }
});

routerTasks.route('/:taskId').delete(async (req: Request, res: Response) => {
  const idTasksDel = req.params['taskId'];
  if (idTasksDel !== undefined) {
    const tasksdelId = await deleteTaskServis(idTasksDel);
    res.status(200).json(tasksdelId);
  }
});

export { routerTasks };
