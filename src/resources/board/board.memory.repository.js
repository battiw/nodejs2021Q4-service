const dataArrayBoard = [];

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
const spB = dataArrayBoard.find( item => item.id === idBoardPut );
spB.title = createBorderPut.title;
spB.columns = createBorderPut.columns;
return spB;
};

const deleteBoardMemory = async(idBoardDelete) => {

const dbID = dataArrayBoard.findIndex( item  => item.id === idBoardDelete);
dataArrayBoard.splice( dbID, 1 );
return dataArrayBoard;
};

  module.exports = { getAllBoardMemory, postBoardMemory, getIDBoardsMemory, putBoardMemory, deleteBoardMemory };
