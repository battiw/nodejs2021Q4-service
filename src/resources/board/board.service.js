const boardRepo = require('./board.memory.repository');

const getAllBoard = () => boardRepo.getBoard();
const getPostBoard = createBoard => boardRepo.postBoard(createBoard);

module.exports = { getAllBoard, getPostBoard };
