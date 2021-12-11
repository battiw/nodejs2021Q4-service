import { Request, Response, Router } from 'express';
import { User } from './user.model';
import {
  getAllServis,
  postUserServis,
  getIDServis,
  putUserServis,
  deleteUserServis,
} from './user.service';
// import { IUser } from '../intefases';
const routerUser = Router();

routerUser.route('/').get(async (_req: Request, res: Response) => {
  const users = await getAllServis();
  res.json(users.map(User.toResponse));
});

routerUser.route('/').post(async (req: Request, res: Response) => {
  const createUser = new User(req.body);
  const usersPost = await postUserServis(createUser);
  res.status(201).json(User.toResponse(usersPost));
});

routerUser.route('/:userId').get(async (req: Request, res: Response) => {
  const idNumber = req.params['userId'];
  if (idNumber !== undefined) {
    const usersid = await getIDServis(idNumber);
    if (!usersid) {
      res.status(404).json();
    } else {
      res.status(200).json(User.toResponse(usersid));
    }
  }
});

routerUser.route('/:id').put(async (req: Request, res: Response) => {
  const idNumberPut = req.params['id'];
  const createUserPut = new User(req.body);
  if (idNumberPut !== undefined) {
    const usersPut = await putUserServis(createUserPut, idNumberPut);
    if (usersPut !== undefined) {
      res.status(200).json(User.toResponse(usersPut));
    } else {
      res.status(404).json();
    }
  }
});

routerUser.route('/:id').delete(async (req: Request, res: Response) => {
  const idNumberDelete = req.params['id'];
  if (!idNumberDelete) return res.status(200).json({});
  const usersDelete = await deleteUserServis(idNumberDelete);
  return res.status(200).json(User.toResponse(usersDelete));
});

export { routerUser };
