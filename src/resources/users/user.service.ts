import { usersRepo } from './user.memory.repository';

const allUsers = () => usersRepo.getAllUsers();

const userByID = (id: string) => usersRepo.getUserByID(id);

const createdUser = (user: {
  id: string;
  name: string;
  login: string;
  password: string;
}) => usersRepo.createUser(user);

const updatedUser = (
  id: string,
  body: { id: string; name: string; login: string; password: string }
) => usersRepo.updateUser(id, body);

const deletesUser = (id: string) => usersRepo.deleteUser(id);

export const usersService = {
  allUsers,
  userByID,
  createdUser,
  updatedUser,
  deletesUser,
};
