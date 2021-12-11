import {
  getTasks,
  postTasksMemory,
  getIdTaskMemory,
  deleteTaskMemory,
  putTaskMemory,
} from './tasks.memory.repository';
import { ITask } from '../intefases';

const getAllTasks = () => getTasks();
const postTaskServis = (createTasks: ITask) => postTasksMemory(createTasks);
const getIdTaskServis = (idTasks: string) => getIdTaskMemory(idTasks);

const putTaskServis = (createPutTasks: ITask, idputTasks: string) =>
  putTaskMemory(createPutTasks, idputTasks);

const deleteTaskServis = (idTasksDel: string) => deleteTaskMemory(idTasksDel);

export {
  getAllTasks,
  postTaskServis,
  getIdTaskServis,
  deleteTaskServis,
  putTaskServis,
};
