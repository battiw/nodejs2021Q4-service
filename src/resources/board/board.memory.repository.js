const dataArrayBoard = [];

const getBoard = async () => dataArrayBoard;

const postBoard = async (createBoard) => {
    dataArrayBoard.push(createBoard)
    return createBoard;
  };
  


  module.exports = { getBoard, postBoard };
