const boardRepo = require('./board.memory.repository');

const getAllBoardServis = () => boardRepo.getAllBoardMemory();
const postBoardServis = createBoard => boardRepo.postBoardMemory(createBoard);
const getIDBoardsServis = idBoardID => boardRepo.getIDBoardsMemory(idBoardID);
const putBoardServis = (idBoardPut, createBorderPut) => boardRepo.putBoardMemory(idBoardPut, createBorderPut);
const deleteBoardServis = idBoardDelete => boardRepo.deleteBoardMemory(idBoardDelete);
module.exports = { getAllBoardServis, postBoardServis, getIDBoardsServis, putBoardServis, deleteBoardServis };
