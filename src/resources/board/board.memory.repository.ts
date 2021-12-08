import { dataArrayBoardDB, dataArrayTasksDB, IBoard } from '../db';

const getAllBoardMemory = async () => dataArrayBoardDB;

const postBoardMemory = async (createBoard: IBoard) => {
  dataArrayBoardDB.push(createBoard);
  return createBoard;
};

const getIDBoardsMemory = async (idBoardID: string) => {
  const idB = dataArrayBoardDB.find(
    (item: { id: string }) => item.id === idBoardID
  );
  return idB;
};

const putBoardMemory = async (idBoardPut: string, createBorderPut: any) => {
  const objBoardPutindex = dataArrayBoardDB.findIndex(
    (item: { id: string }) => item.id === idBoardPut
  );
  if (objBoardPutindex !== -1) {
    dataArrayBoardDB[objBoardPutindex] = createBorderPut;
  }
  return dataArrayBoardDB[objBoardPutindex];
};

const deleteBoardMemory = async (idBoardDelete: string) => {
  const boardIndex = dataArrayBoardDB.findIndex(
    (el: { id: string }) => el.id === idBoardDelete
  );
  const board = dataArrayBoardDB[boardIndex];
  dataArrayBoardDB.splice(boardIndex, 1);

  while (true) {
    const taskIndex = dataArrayTasksDB.findIndex(
      (el: { boardId: string }) => el.boardId === idBoardDelete
    );
    if (taskIndex === -1) break;
    dataArrayTasksDB.splice(taskIndex, 1);
  }
  return board;
};

export {
  getAllBoardMemory,
  postBoardMemory,
  getIDBoardsMemory,
  putBoardMemory,
  deleteBoardMemory,
};
