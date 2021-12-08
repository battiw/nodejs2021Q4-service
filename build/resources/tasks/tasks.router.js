// const routerTasks = require('express').Router({mergeParams: true});
import { Router } from "express";
import { Task } from './tasks.model';
import { getAllTasks, postTaskServis, getIdTaskServis, deleteTaskServis, putTaskServis } from './tasks.service';
const routerTasks = Router({ mergeParams: true });
routerTasks.route('/').get(async (req, res) => {
    const tasksAll = await getAllTasks();
    res.status(200).json(tasksAll);
});
routerTasks.route('/').post(async (req, res) => {
    const idBoardTask = req.params;
    const createTasks = new Task({ ...req.body, ...idBoardTask });
    const tasksPost = await postTaskServis(createTasks);
    res.status(201).json(tasksPost);
});
routerTasks.route('/:taskId').get(async (req, res) => {
    const idTasks = req.params.taskId;
    const tasksgetId = await getIdTaskServis(idTasks);
    if (!tasksgetId) {
        res.status(404).json();
    }
    else {
        res.status(200).json(tasksgetId);
    }
});
routerTasks.route('/:taskId').put(async (req, res) => {
    const idputTasks = req.params.taskId;
    const createPutTasks = new Task(req.body);
    const tasksPut = await putTaskServis(createPutTasks, idputTasks);
    res.status(200).json(tasksPut);
});
routerTasks.route('/:taskId').delete(async (req, res) => {
    const idTasksDel = req.params.taskId;
    const tasksdelId = await deleteTaskServis(idTasksDel);
    res.status(200).json(tasksdelId);
});
export { routerTasks };
