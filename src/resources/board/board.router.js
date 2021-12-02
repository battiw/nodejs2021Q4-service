const router = require('express').Router();
// const { query } = require('express');
const Board = require('./board.model');
const boardService = require('./board.service');
// const { version } = require( 'uuid' );

router.route('/').get(async ( req, res ) => {
    const boardAll = await boardService.getAllBoard();
    console.log(boardAll);
    // res.status(200).json( boardAll.map(Board.toResponseBoard) );
    res.status(200).json( boardAll );
  });

router.route('/').post(async ( req, res ) => {
    const createBoard = new Board(req.body)
    const boardPost = await boardService.getPostBoard(createBoard);
    // res.json(( Board.toResponseBoard(boardPost) ));
    res.status(201).json(boardPost);
  });
  

  module.exports = router;
