export interface IUser {
  id: number;
  name: string;
  login: string;
  password: string;
}

export interface ITask {
  id: string;
  title: string;
  order: string;
  description: string;
  userId: string;
  boardId: string;
  columnId: string;
}

export interface IBoard {
  id: string;
  title: string;
  order: string[];
}
