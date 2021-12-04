const routerTasks = require('express').Router();
// const { query } = require('express');
const Task = require('./tasks.model');
const tasksService = require('./tasks.service');

routerTasks.route('/').get(async ( req, res ) => {
    const tasksAll = await tasksService.getAllTasks();
    // console.log(`@@@@@@@@@@@@@@@@@@@@@@@@@@req.params ${tasksAll}`);
    res.status(200).json( tasksAll );
});


routerTasks.route('/').post(async ( req, res ) => {
    
    // req.body.boardId = req.params['boardId']
    const q = req.body
    
    // const idBoardTask = req.params.boardId
    // const createTasks = new Tasks(req.body)
// console.log(`createTasks ==============> ${q}`)
console.log(`createTasks ==============> ${JSON.stringify(q)}`)
// console.log(`createTasks ==============> ${JSON.stringify(createTasks)}`)

    const tasksPost = await tasksService.postTaskServis(new Task(q));
    console.log(`tasksPost ===> ${tasksPost}`)
    console.log(`tasksPost ===> ${JSON.stringify(tasksPost)}`)
    res.status(201).json(tasksPost);
});


// routerTasks.route('/:id/tasks/:tasksId').get(async ( req, res ) => {
//     const idTasks = req.params.tasksId
//     console.log(`idTasks ==========> ${idTasks}`)
//     const tasksgetId = await tasksService.getIdTaskServis(idTasks);
//     console.log(`tasksgetId =============> ${tasksgetId}`)
//     console.log(`tasksgetId =============> ${JSON.stringify(tasksgetId)}`)
//     res.status(200).json(tasksgetId);
// });

// routerTasks.route('/:id/tasks/:tasksId').put(async ( req, res ) => {
    
//     const idputTasks = req.params.tasksId
//     const createPutTasks = new Tasks(req.body)

//     const tasksPut = await tasksService.putTaskServis(createPutTasks, idputTasks);
//     res.status(200).json(tasksPut);
// });


// router.route('/:id/tasks/:tasksId').delete(async ( req, res ) => {
//     const idTasksDel = req.params.tasksId
//     console.log(`idTasksDel ==========> ${idTasksDel}`)
//     const tasksdelId = await tasksService.deleteTaskServis(idTasksDel);
    
//     console.log(`tasksdelId ==========> ${tasksdelId}`)
//     res.status(200).json(tasksdelId);
// });



module.exports = routerTasks;
