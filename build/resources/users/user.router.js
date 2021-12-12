"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerUser = void 0;
const express_1 = require("express");
const user_model_1 = require("./user.model");
const user_service_1 = require("./user.service");
// import { IUser } from '../intefases';
const routerUser = (0, express_1.Router)();
exports.routerUser = routerUser;
routerUser.route('/').get(async (_req, res) => {
    const users = await (0, user_service_1.getAllServis)();
    res.json(users.map(user_model_1.User.toResponse));
});
routerUser.route('/').post(async (req, res) => {
    const createUser = new user_model_1.User(req.body);
    const usersPost = await (0, user_service_1.postUserServis)(createUser);
    res.status(201).json(user_model_1.User.toResponse(usersPost));
});
routerUser.route('/:userId').get(async (req, res) => {
    const idNumber = req.params['userId'];
    if (idNumber !== undefined) {
        const usersid = await (0, user_service_1.getIDServis)(idNumber);
        if (!usersid) {
            res.status(404).json();
        }
        else {
            res.status(200).json(user_model_1.User.toResponse(usersid));
        }
    }
});
routerUser.route('/:id').put(async (req, res) => {
    const idNumberPut = req.params['id'];
    const createUserPut = new user_model_1.User(req.body);
    if (idNumberPut !== undefined) {
        const usersPut = await (0, user_service_1.putUserServis)(createUserPut, idNumberPut);
        if (usersPut !== undefined) {
            res.status(200).json(user_model_1.User.toResponse(usersPut));
        }
        else {
            res.status(404).json();
        }
    }
});
routerUser.route('/:id').delete(async (req, res) => {
    const idNumberDelete = req.params['id'];
    if (!idNumberDelete)
        return res.status(200).json({});
    const usersDelete = await (0, user_service_1.deleteUserServis)(idNumberDelete);
    return res.status(200).json(user_model_1.User.toResponse(usersDelete));
});
