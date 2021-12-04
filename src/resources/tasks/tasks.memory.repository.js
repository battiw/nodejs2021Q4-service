const dataArrayTasks = [];

const getTasks = async () => dataArrayTasks;

const postTasksMemory = async(q) => {
// createTasks.id = idBoardTask;
dataArrayTasks.push(q);
return dataArrayTasks;
};

// const getIdTaskMemory = async( idTasks ) => {
//     const searchIdTasks = dataArrayTasks.find( item => item.tasksID === idTasks ); 
//     return searchIdTasks;
// };

// const deleteTaskMemory = async( idTasksDel ) => {
//     const searchDelTasksElem = dataArrayTasks.find(item => item.id === idTasksDel);
//     const searchDelTasksIndex = dataArrayTasks.findIndex( item => item.id === idTasksDel );
//     dataArrayTasks.splice( searchDelTasksIndex, 1 );
//     console.log(`searchDelTasksElem ====> ${searchDelTasksElem}`)
//     console.log(`searchDelTasksElem ====> ${JSON.stringify(searchDelTasksElem)}`)
//     return searchDelTasksElem;
// };

// const putTaskMemory = async(createPutTasks, idputTasks) => {
//     const objTasksPut= dataArrayTasks.find(item => item.tasksID = idputTasks);
//     objTasksPut.title = createPutTasks.title;
//     objTasksPut.colummns = createPutTasks.colummns;
//     objTasksPut.order = createPutTasks.order;
//     objTasksPut.description = createPutTasks.description;
//     return objTasksPut;
// }


module.exports = { getTasks, postTasksMemory, /* getIdTaskMemory, deleteTaskMemory, putTaskMemory */ };
