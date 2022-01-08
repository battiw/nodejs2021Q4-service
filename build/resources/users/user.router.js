"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerUser = void 0;
const express_1 = require("express");
const user_model_1 = require("./user.model");
const user_service_1 = require("./user.service");
// import { logger } from '../../log/WinstonLog/loggerWinston';
const routerUser = (0, express_1.Router)();
exports.routerUser = routerUser;
routerUser.route('/').get(async (_req, res) => {
    /**
     * Function returns all users
     * @returns Promis function call result getAllServis
     */
    const users = await (0, user_service_1.getAllServis)();
    res.json(users.map(user_model_1.User.toResponse));
});
routerUser.route('/').post(async (req, res) => {
    const createUser = new user_model_1.User(req.body);
    /**
     * Function adds a user to the database
     * @param createUser - user with parameters
     * @returns Promis added user
     */
    const usersPost = await (0, user_service_1.postUserServis)(createUser);
    if (usersPost !== undefined) {
        res.status(201).json(user_model_1.User.toResponse(usersPost));
    }
    else {
        res.status(404).json();
    }
});
routerUser.route('/:userId').get(async (req, res) => {
    const idNumber = req.params['userId'];
    if (idNumber !== undefined) {
        /**
         * Function search for a user with a given id
         * @param idNumber - id user
         * @returns Promis an user with the given id
         */
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
        /**
         * Function changes user parameters with id
         * @param createUserPut - user with parameters
         * @param idNumberPut - id user
         * @returns Promis changed user data
         */
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
    /**
     * Function deletes user parameters with id and all his tasks
     * @param idNumberDelete - id user
     * @returns Promis remote user
     */
    const usersDelete = await (0, user_service_1.deleteUserServis)(idNumberDelete);
    return res.status(200).json(user_model_1.User.toResponse(usersDelete));
});
routerUser.use('/*', (_req, res) => {
    return res.status(400).send('Incorrect path');
});
