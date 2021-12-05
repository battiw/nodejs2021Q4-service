const {dataArrayTasks} = require('../db');

const getTasks = async () => dataArrayTasks;

const postTasksMemory = async(q) => {
dataArrayTasks.push(q);
return q;
};

const getIdTaskMemory = async( idTasks ) => {
    const searchIdTasks = dataArrayTasks.find( item => item.id === idTasks ); 
    return searchIdTasks;
};

const putTaskMemory = async(createPutTasks, idputTasks) => {
    const objTasksPutindex = dataArrayTasks.findIndex(item => item.id === idputTasks);
    if (objTasksPutindex !== -1){
        dataArrayTasks[objTasksPutindex] = createPutTasks;
    };
    return dataArrayTasks[objTasksPutindex];
}

const deleteTaskMemory = async( idTasksDel ) => {
    // console.log(`idTasksDel => ${idTasksDel}`)
    // console.log(`idBoardDel => ${idBoardDel}`)
        const searchDelTasksIndex = dataArrayTasks.findIndex( item => item.id === idTasksDel );
        const searchDelTasksItem = dataArrayTasks.find( item => item.id === idTasksDel );
        dataArrayTasks.splice( searchDelTasksIndex, 1 );
        // const searchDelTasksElem = dataArrayTasks.find(item => item.id === idTasksDel);

        return searchDelTasksItem;

};

// const deleteTaskMemoryAll = async( idBoardDelAll ) => {

//         // console.log(`Delete tasks for Bord in ID ${idBoardDelAll}`)
//         let arrInterp = [];
//         dataArrayTasks.forEach(function (item) {

//             if (item.boardId !== idBoardDelAll ){
//                 arrInterp.push(item)
//             }
//                 dataArrayTasks = arrInterp;
//         });
//         return arrInterp;
    
// };

module.exports = { getTasks, postTasksMemory,  getIdTaskMemory, deleteTaskMemory, putTaskMemory, /* deleteTaskMemoryAll */ };
