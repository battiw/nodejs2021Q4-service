import { dataArrayTasksDB } from '../db';
import { ITask } from '../intefases';

/**
 * Function returns all tasks
 * @returns Promis array of tasks
 */
const getTasks = async () => dataArrayTasksDB;

/**
 * Function adds a task to the database
 * @param createTasks - task with parameters
 * @returns Promis added task
 */
const postTasksMemory = async (createTasks: ITask) => {
  dataArrayTasksDB.push(createTasks);
  return createTasks;
};

/**
 * Function search for a task with a given id
 * @param idTasks - id task
 * @returns Promis an task with the given id
 */
const getIdTaskMemory = async (idTasks: string) => {
  const searchIdTasks = dataArrayTasksDB.find((item) => item.id === idTasks);
  return searchIdTasks;
};

/**
 * Function changes user parameters with id
 * @param createPutTasks - task with parameters
 * @param idputTasks - id task
 * @returns Promis changed task data
 */
const putTaskMemory = async (createPutTasks: ITask, idputTasks: string) => {
  const objTasksPutindex = dataArrayTasksDB.findIndex(
    (item) => item.id === idputTasks
  );
  if (objTasksPutindex !== -1) {
    dataArrayTasksDB[objTasksPutindex] = createPutTasks;
  }
  return dataArrayTasksDB[objTasksPutindex];
};

/**
 * Function deletes task parameters with id
 * @param idTasksDel - id task
 * @returns Promis remote task
 */
const deleteTaskMemory = async (idTasksDel: string) => {
  const searchDelTasksIndex = dataArrayTasksDB.findIndex(
    (item) => item.id === idTasksDel
  );
  const searchDelTasksItem = dataArrayTasksDB.find(
    (item) => item.id === idTasksDel
  );
  dataArrayTasksDB.splice(searchDelTasksIndex, 1);

  return searchDelTasksItem;
};

export {
  getTasks,
  postTasksMemory,
  getIdTaskMemory,
  deleteTaskMemory,
  putTaskMemory,
};
