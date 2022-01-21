import { taskdRepo } from './tasks.memory.repository';

type Task = {
  id: string;
  title: string;
  order: number;
  description: string;
  userId: null;
  boardId: null;
  columnId: null;
};

const allTasks = () => taskdRepo.getAllTasks();

const taskByID = (id: string) => taskdRepo.getTaskByID(id);

const createdTask = (task: Task) => taskdRepo.createTask(task);

const updatedTask = (id: string, body: Task) => taskdRepo.updateTask(id, body);

const deletedTask = (id: string) => taskdRepo.deleteTask(id);

export const tasksService = {
  allTasks,
  taskByID,
  createdTask,
  updatedTask,
  deletedTask,
};
