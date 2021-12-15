/**
 * Interface IColum
 * @param id - string
 * @param title - string
 * @param order - number
 */
interface IColumn {
  id: string;
  title: string;
  order: number;
}

/**
 * Interface IUser
 * @param id - string
 * @param name - string
 * @param login - string
 * @param order - string
 */
export interface IUser {
  id: string;
  name: string;
  login: string;
  password: string;
}

/**
 * Interface ITask
 * @param id - string
 * @param title - string
 * @param order - number
 * @param description - string
 * @param userId - string | null
 * @param boardId - string | null
 * @param columnId - string | null
 *
 */
export interface ITask {
  id?: string;
  title?: string;
  order?: number;
  description?: string;
  userId?: string | null;
  boardId?: string | null;
  columnId?: string | null;
}

/**
 * Interface IBoard
 * @param id - string
 * @param title - string
 * @param columns - [id: string; title: string; order: number;]
 */
export interface IBoard {
  id: string;
  title: string;
  columns: IColumn[];
}
