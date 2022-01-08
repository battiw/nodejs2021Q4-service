"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerTasks = void 0;
// const routerTasks = require('express').Router({mergeParams: true});
const express_1 = require("express");
const tasks_model_1 = require("./tasks.model");
const tasks_service_1 = require("./tasks.service");
const routerTasks = (0, express_1.Router)({ mergeParams: true });
exports.routerTasks = routerTasks;
routerTasks.route('/').get(async (_req, res) => {
    const tasksAll = await (0, tasks_service_1.getAllTasks)();
    res.status(200).json(tasksAll);
});
routerTasks.route('/').post(async (req, res) => {
    const idBoardTask = req.params;
    const createTasks = new tasks_model_1.Task({ ...req.body, ...idBoardTask });
    const tasksPost = await (0, tasks_service_1.postTaskServis)(createTasks);
    res.status(201).json(tasksPost);
});
routerTasks.route('/:taskId').get(async (req, res) => {
    const idTasks = req.params['taskId'];
    if (idTasks !== undefined) {
        const tasksgetId = await (0, tasks_service_1.getIdTaskServis)(idTasks);
        if (!tasksgetId) {
            res.status(404).json();
        }
        else {
            res.status(200).json(tasksgetId);
        }
    }
});
routerTasks.route('/:taskId').put(async (req, res) => {
    const idputTasks = req.params['taskId'];
    const createPutTasks = new tasks_model_1.Task(req.body);
    if (idputTasks !== undefined) {
        const tasksPut = await (0, tasks_service_1.putTaskServis)(createPutTasks, idputTasks);
        res.status(200).json(tasksPut);
    }
});
routerTasks.route('/:taskId').delete(async (req, res) => {
    const idTasksDel = req.params['taskId'];
    if (idTasksDel !== undefined) {
        const tasksdelId = await (0, tasks_service_1.deleteTaskServis)(idTasksDel);
        res.status(200).json(tasksdelId);
    }
});
