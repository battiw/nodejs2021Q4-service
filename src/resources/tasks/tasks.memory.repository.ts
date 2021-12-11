import { dataArrayTasksDB } from '../db';
import { ITask } from '../intefases';

const getTasks = async () => dataArrayTasksDB;

const postTasksMemory = async (createTasks: ITask) => {
  dataArrayTasksDB.push(createTasks);
  return createTasks;
};

const getIdTaskMemory = async (idTasks: string) => {
  const searchIdTasks = dataArrayTasksDB.find((item) => item.id === idTasks);
  return searchIdTasks;
};

const putTaskMemory = async (createPutTasks: ITask, idputTasks: string) => {
  const objTasksPutindex = dataArrayTasksDB.findIndex(
    (item) => item.id === idputTasks
  );
  if (objTasksPutindex !== -1) {
    dataArrayTasksDB[objTasksPutindex] = createPutTasks;
  }
  return dataArrayTasksDB[objTasksPutindex];
};

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
