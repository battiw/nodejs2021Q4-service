import {
  getTasks,
  postTasksMemory,
  getIdTaskMemory,
  deleteTaskMemory,
  putTaskMemory,
} from './tasks.memory.repository';
import { ITask } from '../intefases';

/**
 * Service function
 * @returns function call result getTasks
 */
const getAllTasks = () => getTasks();

/**
 * Service function
 * @param createTasks  - task with parameters
 * @returns function call result postTasksMemory
 */
const postTaskServis = (createTasks: ITask) => postTasksMemory(createTasks);

/**
 * Service function
 * @param idTasks -  id task
 * @returns function call result getIdTaskMemory
 */
const getIdTaskServis = (idTasks: string) => getIdTaskMemory(idTasks);

/**
 * Service function
 * @param createPutTasks - task with parameters
 * @param idNumberPut - id task
 * @returns function call result putTaskMemory
 */
const putTaskServis = (createPutTasks: ITask, idputTasks: string) =>
  putTaskMemory(createPutTasks, idputTasks);

/**
 * Service function
 * @param idTasksDel - id task
 * @returns function call result deleteTaskMemory
 */
const deleteTaskServis = (idTasksDel: string) => deleteTaskMemory(idTasksDel);

export {
  getAllTasks,
  postTaskServis,
  getIdTaskServis,
  deleteTaskServis,
  putTaskServis,
};
