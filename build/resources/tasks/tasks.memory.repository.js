import { dataArrayTasksDB } from '../db';
const getTasks = async () => dataArrayTasksDB;
const postTasksMemory = async (createTasks) => {
    dataArrayTasksDB.push(createTasks);
    return createTasks;
};
const getIdTaskMemory = async (idTasks) => {
    const searchIdTasks = dataArrayTasksDB.find(item => item.id === idTasks);
    return searchIdTasks;
};
const putTaskMemory = async (createPutTasks, idputTasks) => {
    const objTasksPutindex = dataArrayTasksDB.findIndex(item => item.id === idputTasks);
    if (objTasksPutindex !== -1) {
        dataArrayTasksDB[objTasksPutindex] = createPutTasks;
    }
    ;
    return dataArrayTasksDB[objTasksPutindex];
};
const deleteTaskMemory = async (idTasksDel) => {
    const searchDelTasksIndex = dataArrayTasksDB.findIndex(item => item.id === idTasksDel);
    const searchDelTasksItem = dataArrayTasksDB.find(item => item.id === idTasksDel);
    dataArrayTasksDB.splice(searchDelTasksIndex, 1);
    return searchDelTasksItem;
};
export { getTasks, postTasksMemory, getIdTaskMemory, deleteTaskMemory, putTaskMemory };
