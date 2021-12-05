const {dataArrayBoard, dataArrayTasks} = require('../db');

const getAllBoardMemory = async () => dataArrayBoard;

const postBoardMemory = async (createBoard) => {
    dataArrayBoard.push(createBoard)
    return createBoard;
  };
  
const getIDBoardsMemory = async(idBoardID) =>{
  const idB = dataArrayBoard.find(item => item.id === idBoardID)
  return idB;
};

const putBoardMemory = async( idBoardPut, createBorderPut ) => {

  const objBoardPutindex = dataArrayBoard.findIndex(item => item.id === idBoardPut);
  if (objBoardPutindex !== -1){
    dataArrayBoard[objBoardPutindex] = createBorderPut;
  };
  return dataArrayBoard[objBoardPutindex];

};


const deleteBoardMemory = async (idBoardDelete) => {
  // console.log(`************** ${idBoardDelete}`);
  const boardIndex = dataArrayBoard.findIndex((el) => el.id === idBoardDelete);
  const board = dataArrayBoard[boardIndex];
  dataArrayBoard.splice(boardIndex, 1);

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const taskIndex = dataArrayTasks.findIndex(
      (el) => el.boardId === idBoardDelete
    );
    if (taskIndex === -1) break;
    // console.log(`/////////////////`);
    dataArrayTasks.splice(taskIndex, 1);
  }
  // console.log(`------ ${JSON.stringify(dataArrayTasks)}`);
  return board;
};
// const deleteBoardMemory = async( idBoardDelete ) => {
//   let indB;
//   while(indB !== -1) {
//     indB = dataArrayTasks.findIndex(item => item.userId === idBoardDelete)
//     dataArrayTasks.splice( indB, 1 );
//   };

//   const dbID = dataArrayBoard.findIndex( item  => item.id === idBoardDelete);
//       const board = dataArrayTasks[dbID]
//       dataArrayBoard.splice( dbID, 1 );
//   return board;
// };


// const deleteBoardMemory = async (idBoardDelete) => {
//   const boardIndex = dataArrayTasks.findIndex((el) => el.id === idBoardDelete);
//   const board = dataArrayTasks[boardIndex];
//   dataArrayTasks.splice(boardIndex, 1);

//   while (true) {
//     const taskIndex = dataArrayTasks.findIndex((el) => el.boardId === idBoardDelete);
//     if (taskIndex === -1) break;
//     dataArrayTasks.splice(taskIndex, 1);
//   }
//   return board;
// };




module.exports = { getAllBoardMemory, postBoardMemory, getIDBoardsMemory, putBoardMemory, deleteBoardMemory };
