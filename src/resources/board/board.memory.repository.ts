import { getRepository } from 'typeorm';

// import { dataArrayBoardDB, dataArrayTasksDB } from '../db';
// import { IBoard } from '../intefases';
import { Board } from '../../entity/Board';
import { Columns } from '../../entity/Columns';

/**
 * Function returns all boards
 * @returns Promis array of boards
 */

const getAllBoardMemory = async () => {
  const boardsRepository = getRepository(Board);
  const findAllBoards = await boardsRepository
    .createQueryBuilder('users')
    .select(['id', 'title'])
    .getRawMany();
  return findAllBoards;
};

/**
 *Function adds a board to the database
 * @param createBoard - board with parameters
 * @returns Promis added board
 */

const postBoardMemory = async (createBoard: Board) => {
  console.log(createBoard);

  const arrColumns: Columns[] = createBoard.columns;

  const board = new Board();
  board.id = createBoard.id;
  board.title = createBoard.title;
  board.columns = arrColumns;
  await getRepository(Columns).save(arrColumns);
  await getRepository(Board).save(board);
  return board;
};

/**
 *Function search for a board with a given id
 * @param idBoardID - id board
 * @returns Promis an board with the given id
 */

const getIDBoardsMemory = async (idBoardID: string) => {
  const boardRepositoryID = getRepository(Board);
  const findIdBoard = await boardRepositoryID
    .createQueryBuilder('board')
    .select()
    .where('users.id = :id', { id: idBoardID })
    .getRawOne();
  return findIdBoard;
};

/**
 *Function changes board parameters with id
 * @param idBoardPut - id board
 * @param createBorderPut - board with parameters
 * @returns Promis changed board data
 */

const putBoardMemory = async (idBoardPut: string, createBorderPut: Board) => {
  const putRepositoryIDPut = getRepository(Board);

  const fineputObjectBoard = await putRepositoryIDPut
    .createQueryBuilder()
    .update(Board)
    .set({
      title: createBorderPut.title,
      columns: createBorderPut.columns,
    })
    .where('id = :id', { id: idBoardPut })
    .execute();
  return fineputObjectBoard;
};

/**
 *Function deletes board parameters with id and all his tasks
 * @param idBoardDelete - id board
 * @returns Promis remote board
 */
// const deleteBoardMemory = async (idBoardDelete: string) => {
//   const boardIndex = dataArrayBoardDB.findIndex(
//     (el: { id: string }) => el.id === idBoardDelete
//   );
//   const board = dataArrayBoardDB[boardIndex];
//   dataArrayBoardDB.splice(boardIndex, 1);

//   while (dataArrayTasksDB.length !== 0) {
//     const taskIndex = dataArrayTasksDB.findIndex(
//       (el) => el.boardId === idBoardDelete
//     );
//     if (taskIndex === -1) break;
//     dataArrayTasksDB.splice(taskIndex, 1);
//   }
//   return board;
// };

const deleteBoardMemory = async (idBoardDelete: string) => {
  const boardRepositoryIDdel = getRepository(Board);

  const deleteBoardObject = await boardRepositoryIDdel
    .createQueryBuilder()
    .delete()
    .from(Board)
    .where('id= :id', { id: idBoardDelete })
    .execute();
  return deleteBoardObject;
};

export {
  getAllBoardMemory,
  postBoardMemory,
  getIDBoardsMemory,
  putBoardMemory,
  deleteBoardMemory,
};
