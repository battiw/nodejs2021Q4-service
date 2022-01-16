import { getRepository } from 'typeorm';
import { Task } from '../../entity/Tasks';

type TaskType = {
  id: string;
  title: string;
  order: number;
  description: string;
  userId: null;
  boardId: null;
  columnId: null;
};

const getAllTasks = async () => {
  const tasksRepository = getRepository(Task);
  return tasksRepository.find({ where: {} });
};

const getTaskByID = async (id: string) => {
  const tasksRepository = getRepository(Task);
  return tasksRepository.findOne(id);
};

const createTask = async (task: TaskType) => {
  const tasksRepository = getRepository(Task);
  const newTask = tasksRepository.create(task);
  const addedTask = tasksRepository.save(newTask);
  return addedTask;
};

const updateTask = async (id: string, body: TaskType) => {
  const tasksRepository = getRepository(Task);
  tasksRepository.update(id, body);
  return body;
};

const deleteTask = async (id: string) => {
  const tasksRepository = getRepository(Task);
  const res = await tasksRepository.delete(id);
  return res.raw;
};

export const taskdRepo = {
  getAllTasks,
  getTaskByID,
  createTask,
  updateTask,
  deleteTask,
};
