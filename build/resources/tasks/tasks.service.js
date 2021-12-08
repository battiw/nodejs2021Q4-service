import { getTasks, postTasksMemory, getIdTaskMemory, deleteTaskMemory, putTaskMemory } from './tasks.memory.repository';
const getAllTasks = () => getTasks();
const postTaskServis = (createTasks) => postTasksMemory(createTasks);
const getIdTaskServis = (idTasks) => getIdTaskMemory(idTasks);
const putTaskServis = (createPutTasks, idputTasks) => putTaskMemory(createPutTasks, idputTasks);
const deleteTaskServis = (idTasksDel) => deleteTaskMemory(idTasksDel);
export { getAllTasks, postTaskServis, getIdTaskServis, deleteTaskServis, putTaskServis };
