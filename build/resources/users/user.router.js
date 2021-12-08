import { Router } from "express";
import { User } from './user.model';
import { getAllServis, postUserServis, getIDServis, putUserServis, deleteUserServis } from './user.service';
const routerUser = Router();
routerUser.route('/').get(async (req, res) => {
    const users = await getAllServis();
    res.json(users.map(User.toResponse));
});
routerUser.route('/').post(async (req, res) => {
    const createUser = new User(req.body);
    const usersPost = await postUserServis(createUser);
    res.status(201).json(User.toResponse(usersPost));
});
routerUser.route('/:id').get(async (req, res) => {
    const idNumber = req.params.id;
    const usersid = await getIDServis(idNumber);
    if (!usersid) {
        res.status(404).json();
    }
    else {
        res.status(200).json(User.toResponse(usersid));
    }
    ;
});
routerUser.route('/:id').put(async (req, res) => {
    const idNumberPut = req.params.id;
    const createUserPut = new User(req.body);
    const usersPut = await putUserServis(idNumberPut, createUserPut);
    res.status(200).json(User.toResponse(usersPut));
});
routerUser.route('/:id').delete(async (req, res) => {
    const idNumberDelete = req.params.id;
    const usersDelete = await deleteUserServis(idNumberDelete);
    res.status(200).json(User.toResponse(usersDelete));
});
export { routerUser };
