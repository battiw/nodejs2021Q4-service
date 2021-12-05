const routerTasks = require('express').Router({mergeParams: true});
const Task = require('./tasks.model');
const tasksService = require('./tasks.service');

routerTasks.route('/').get(async ( req, res ) => {
    const tasksAll = await tasksService.getAllTasks();
    res.status(200).json( tasksAll );
});


routerTasks.route('/').post(async ( req, res ) => {
    const idBoardTask = req.params;
    const createTasks = new Task({...req.body, ...idBoardTask});
    const tasksPost = await tasksService.postTaskServis(createTasks);
    res.status(201).json(tasksPost);
});


routerTasks.route('/:taskId').get(async ( req, res ) => {
    const idTasks = req.params.taskId
    const tasksgetId = await tasksService.getIdTaskServis(idTasks);
    if (!tasksgetId) {
        res.status(404).json();
      } else {
        res.status(200).json(tasksgetId);
      }

});

routerTasks.route('/:taskId').put(async ( req, res ) => {
    const idputTasks = req.params.taskId;
    const createPutTasks = new Task(req.body)
    const tasksPut = await tasksService.putTaskServis(createPutTasks, idputTasks);
    res.status(200).json(tasksPut);
});


routerTasks.route('/:taskId').delete(async ( req, res ) => {
    const idTasksDel = req.params.taskId
    // console.log(`idTasksDel ==========> ${idBoardDel}`)
    // console.log(`idTasksDel ==========> ${idTasksDel}`)
    const tasksdelId = await tasksService.deleteTaskServis(idTasksDel);
    // console.log(`tasksdelId ==========> ${JSON.stringify(tasksdelId)}`)
    res.status(200).json(tasksdelId);
    // if (!tasksdelId) {
    //     res.status(404).json();
    // } else {
    //     res.status(200).json(tasksdelId);
    //   }
});



module.exports = routerTasks;
