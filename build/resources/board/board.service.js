// import {boardRepo} from './board.memory.repository';
import { getAllBoardMemory, postBoardMemory, getIDBoardsMemory, putBoardMemory, deleteBoardMemory } from './board.memory.repository';
const getAllBoardServis = () => getAllBoardMemory();
const postBoardServis = (createBoard) => postBoardMemory(createBoard);
const getIDBoardsServis = (idBoardID) => getIDBoardsMemory(idBoardID);
const putBoardServis = (idBoardPut, createBorderPut) => putBoardMemory(idBoardPut, createBorderPut);
const deleteBoardServis = (idBoardDelete) => deleteBoardMemory(idBoardDelete);
export { getAllBoardServis, postBoardServis, getIDBoardsServis, putBoardServis, deleteBoardServis };
