const tasksRepo = require('./tasks.memory.repository');

const getAllTasks = () => tasksRepo.getTasks();
const postTaskServis = (q) => tasksRepo.postTasksMemory(q);
const getIdTaskServis = (idTasks) => tasksRepo.getIdTaskMemory(idTasks);

const putTaskServis = (createPutTasks, idputTasks) => tasksRepo.putTaskMemory(createPutTasks, idputTasks);

const deleteTaskServis = (idTasksDel) => tasksRepo.deleteTaskMemory(idTasksDel);

module.exports = { getAllTasks, postTaskServis, getIdTaskServis, deleteTaskServis, putTaskServis };
