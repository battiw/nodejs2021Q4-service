import { Request, Router } from 'express';
import { tasksService } from './tasks.service';

const taskRouter = Router({ mergeParams: true });

taskRouter.route('/').get(async (_req, res) => {
  const tasks = await tasksService.allTasks();
  res.status(200).json(tasks);
});

taskRouter.route('/:taskId').get(async (req, res) => {
  const id = req.params.taskId;
  const taskdID = await tasksService.taskByID(id);

  if (taskdID === undefined) {
    res.status(404).json();
  } else {
    res.status(200).json(taskdID);
  }
});

taskRouter.route('/').post(async (req: Request, res) => {
  req.body.boardId = req.params['boardId'];
  const addedTask = await tasksService.createdTask(req.body);
  res.status(201).json(addedTask);
});

taskRouter.route('/:taskId').put(async (req, res) => {
  const id = req.params.taskId;
  const { body } = req;
  const changedTask = await tasksService.updatedTask(id, body);

  res.status(200).json(changedTask);
});

taskRouter.route('/:taskId').delete(async (req, res) => {
  const id = req.params.taskId;
  const deletedTask = await tasksService.deletedTask(id);

  res.status(200).json(deletedTask);
});

export { taskRouter };
