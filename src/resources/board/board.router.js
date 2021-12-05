const router = require('express').Router({mergeParams: true});
const Board = require('./board.model');
const boardService = require('./board.service');
const routerTasks = require('../tasks/tasks.router');


router.use('/:boardId/tasks', routerTasks)


router.route('/').get(async ( req, res ) => {
    const boardAll = await boardService.getAllBoardServis();
    res.status(200).json( boardAll );
});

router.route('/').post(async ( req, res ) => {
    const createBoard = new Board(req.body)
    const boardPost = await boardService.postBoardServis(createBoard);
    res.status(201).json(boardPost);
});

router.route( '/:boardId' ).get( async ( req, res ) => {
    const idBoardID = req.params.boardId;
    const boardsID = await boardService.getIDBoardsServis( idBoardID );
    if (!boardsID) {
        res.status(404).json();
      } else {
        res.status(200).json(boardsID);
      }
});

router.route( '/:boardId' ).put( async (req, res) => {
    const idBoardPut = req.params.boardId;
    const createBorderPut = new Board( req.body );
    const boardPut = await boardService.putBoardServis( idBoardPut, createBorderPut );
    res.status(200).json( boardPut );
});

router.route( '/:boardId' ).delete( async ( req, res ) => {

    const idBoardDelete = req.params.boardId;
    const boardDelete = await boardService.deleteBoardServis( idBoardDelete );

    res.status(200).json( boardDelete );
    // if (!boardDelete) {
    //     res.status(404).json();
    //   } else {
    //     res.status(200).json(boardDelete);
    //   }

});

  module.exports = router;
