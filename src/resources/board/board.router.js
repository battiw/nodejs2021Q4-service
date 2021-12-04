const router = require('express').Router();
// const { query } = require('express');
const Board = require('./board.model');
const boardService = require('./board.service');
// const { version } = require( 'uuid' );

const routerTasks = require('../tasks/tasks.router');

router.use('/:boardId/tasks', routerTasks)


router.route('/').get(async ( req, res ) => {
    const boardAll = await boardService.getAllBoardServis();
    // console.log(boardAll);
    res.status(200).json( boardAll );
});

router.route('/').post(async ( req, res ) => {
    const createBoard = new Board(req.body)
    const boardPost = await boardService.postBoardServis(createBoard);
    res.status(201).json(boardPost);
});

router.route( '/:id' ).get( async ( req, res ) => {
    const idBoardID = req.params.id;
    const boardsID = await boardService.getIDBoardsServis( idBoardID );
    res.status(200).json( boardsID );
});

router.route( '/:id' ).put( async (req, res) => {
    const idBoardPut = req.params.id;
    const createBorderPut = new Board( req.body );
    const boardPut = await boardService.putBoardServis( idBoardPut, createBorderPut );
    res.status(200).json( boardPut );
});

router.route( '/:id' ).delete( async ( req, res ) => {
  const idBoardDelete = req.params.id;
      const boardDelete = await boardService.deleteBoardServis( idBoardDelete );
      res.status(204).json( boardDelete );
});

  module.exports = router;
