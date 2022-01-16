import { getRepository } from 'typeorm';
import { Task } from '../../entity/Tasks';
import { ITask } from '../intefases';

/**
 * Function returns all tasks
 * @returns Promis array of tasks
 */
const findAllTasks = async () => {
  const taskRepository = getRepository(Task);
  const findAllTasks = await taskRepository.createQueryBuilder().getRawMany();
  return findAllTasks;
};

/**
 * Function adds a task to the database
 * @param createTasks - task with parameters
 * @returns Promis added task
 */
const postTasksMemory = async (createTasks: ITask) => {
  const task = new Task();
  task.id = createTasks.id;
  task.title = createTasks.title;
  task.order = createTasks.order;
  task.description = createTasks.description;
  task.userId = createTasks.userId;
  task.boardId = createTasks.boardId;
  task.columnId = createTasks.columnId;
  await getRepository(Task).save(task);
  return createTasks;
};

/**
 * Function search for a task with a given id
 * @param idTasks - id task
 * @returns Promis an task with the given id
 */

const getIdTaskMemory = async (idTasks: string) => {
  const taskRepositoryID = getRepository(Task);
  const findIdTask = await taskRepositoryID
    .createQueryBuilder('task')
    .select()
    .where('task.id = :id', { id: idTasks })
    .getRawOne();
  return findIdTask;
};

/**
 * Function changes user parameters with id
 * @param createPutTasks - task with parameters
 * @param idputTasks - id task
 * @returns Promis changed task data
 */

const putTaskMemory = async (createPutTasks: ITask, idputTasks: string) => {
  const taskRepositoryIDPut = getRepository(Task);

  const fineTaskputObject = await taskRepositoryIDPut
    .createQueryBuilder()
    .update(Task)
    .set({
      title: createPutTasks.title,
      order: createPutTasks.order,
      description: createPutTasks.description,
      userId: createPutTasks.userId,
      boardId: createPutTasks.boardId,
      columnId: createPutTasks.columnId,
    })
    .where('id = :id', { id: idputTasks })
    .execute();
  return fineTaskputObject;
};

/**
 * Function deletes task parameters with id
 * @param idTasksDel - id task
 * @returns Promis remote task
 */
const deleteTaskMemory = async (idTasksDel: string) => {
  const taskRepositoryIDdel = getRepository(Task);

  const deleteTaskObject = await taskRepositoryIDdel
    .createQueryBuilder()
    .delete()
    .from(Task)
    .where('id= :id', { id: idTasksDel })
    .execute();
  return deleteTaskObject;
};

export {
  findAllTasks,
  postTasksMemory,
  getIdTaskMemory,
  deleteTaskMemory,
  putTaskMemory,
};
