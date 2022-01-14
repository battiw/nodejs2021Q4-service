import { Request, Response, Router } from 'express';
// import { User } from './user.model';
import { User } from './user.model';
import {
  getAllServis,
  postUserServis,
  getIDServis,
  putUserServis,
  deleteUserServis,
} from './user.service';

const routerUser = Router();

routerUser.route('/').get(async (_req: Request, res: Response) => {
  /**
   * Function returns all users
   * @returns Promis function call result getAllServis
   */
  const users = await getAllServis();
  res.json(users);
});

routerUser.route('/').post(async (req: Request, res: Response) => {
  const createUser = new User(req.body);

  /**
   * Function adds a user to the database
   * @param createUser - user with parameters
   * @returns Promis added user
   */
  const usersPost = await postUserServis(createUser);
  if (usersPost !== undefined) {
    res.status(201).json(User.toResponse(usersPost));
  } else {
    res.status(404).json();
  }
});

routerUser.route('/:userId').get(async (req: Request, res: Response) => {
  const idNumber = req.params['userId'];
  if (idNumber !== undefined) {
    /**
     * Function search for a user with a given id
     * @param idNumber - id user
     * @returns Promis an user with the given id
     */
    const usersid = await getIDServis(idNumber);
    if (!usersid) {
      res.status(404).json();
    } else {
      res.status(200).json(usersid);
    }
  }
});

routerUser.route('/:id').put(async (req: Request, res: Response) => {
  const idNumberPut = req.params['id'];
  const createUserPut = new User(req.body);
  if (idNumberPut !== undefined) {
    /**
     * Function changes user parameters with id
     * @param createUserPut - user with parameters
     * @param idNumberPut - id user
     * @returns Promis changed user data
     */
    const usersPut = await putUserServis(createUserPut, idNumberPut);
    if (usersPut !== undefined) {
      res.status(200).json(usersPut);
    } else {
      res.status(404).json();
    }
  }
});

routerUser.route('/:id').delete(async (req: Request, res: Response) => {
  const idNumberDelete = req.params['id'];
  if (!idNumberDelete) return res.status(200).json({});
  /**
   * Function deletes user parameters with id and all his tasks
   * @param idNumberDelete - id user
   * @returns Promis remote user
   */
  const usersDelete = await deleteUserServis(idNumberDelete);
  return res.status(200).json(usersDelete);
  // return res.status(200).json(User.toResponse(usersDelete));
});

routerUser.use('/*', (_req, res) => {
  return res.status(400).send('Incorrect path');
});

export { routerUser };
