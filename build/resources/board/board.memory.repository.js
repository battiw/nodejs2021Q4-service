import { dataArrayBoardDB, dataArrayTasksDB } from '../db';
const getAllBoardMemory = async () => dataArrayBoardDB;
const postBoardMemory = async (createBoard) => {
    dataArrayBoardDB.push(createBoard);
    return createBoard;
};
const getIDBoardsMemory = async (idBoardID) => {
    const idB = dataArrayBoardDB.find((item) => item.id === idBoardID);
    return idB;
};
const putBoardMemory = async (idBoardPut, createBorderPut) => {
    const objBoardPutindex = dataArrayBoardDB.findIndex((item) => item.id === idBoardPut);
    if (objBoardPutindex !== -1) {
        dataArrayBoardDB[objBoardPutindex] = createBorderPut;
    }
    ;
    return dataArrayBoardDB[objBoardPutindex];
};
const deleteBoardMemory = async (idBoardDelete) => {
    const boardIndex = dataArrayBoardDB.findIndex((el) => el.id === idBoardDelete);
    const board = dataArrayBoardDB[boardIndex];
    dataArrayBoardDB.splice(boardIndex, 1);
    while (true) {
        const taskIndex = dataArrayTasksDB.findIndex((el) => el.boardId === idBoardDelete);
        if (taskIndex === -1)
            break;
        dataArrayTasksDB.splice(taskIndex, 1);
    }
    return board;
};
export { getAllBoardMemory, postBoardMemory, getIDBoardsMemory, putBoardMemory, deleteBoardMemory };
