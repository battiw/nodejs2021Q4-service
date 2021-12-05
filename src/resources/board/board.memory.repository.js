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

const deleteBoardMemory = async( idBoardDelete ) => {
    const indB = dataArrayTasks.findIndex(item => item.userId === idBoardDelete)
    if ( indB !== -1 ){
      dataArrayTasks.splice( indB, 1 );
    };

  const dbID = dataArrayBoard.findIndex( item  => item.id === idBoardDelete);
  dataArrayBoard.splice( dbID, 1 );
  return dataArrayBoard;
};

module.exports = { getAllBoardMemory, postBoardMemory, getIDBoardsMemory, putBoardMemory, deleteBoardMemory };
