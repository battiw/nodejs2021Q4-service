// const router = require('express').Router({mergeParams: true});
import { Router } from "express";
import { Board } from './board.model';
import { getAllBoardServis, postBoardServis, getIDBoardsServis, putBoardServis, deleteBoardServis } from './board.service';
import { routerTasks } from '../tasks/tasks.router';
const router = Router({ mergeParams: true });
router.use('/:boardId/tasks', routerTasks);
router.route('/').get(async (req, res) => {
    const boardAll = await getAllBoardServis();
    res.status(200).json(boardAll);
});
router.route('/').post(async (req, res) => {
    const createBoard = new Board(req.body);
    const boardPost = await postBoardServis(createBoard);
    res.status(201).json(boardPost);
});
router.route('/:boardId').get(async (req, res) => {
    const idBoardID = req.params.boardId;
    const boardsID = await getIDBoardsServis(idBoardID);
    if (!boardsID) {
        res.status(404).json();
    }
    else {
        res.status(200).json(boardsID);
    }
});
router.route('/:boardId').put(async (req, res) => {
    const idBoardPut = req.params.boardId;
    const createBorderPut = new Board(req.body);
    const boardPut = await putBoardServis(idBoardPut, createBorderPut);
    res.status(200).json(boardPut);
});
router.route('/:boardId').delete(async (req, res) => {
    const idBoardDelete = req.params.boardId;
    const boardDelete = await deleteBoardServis(idBoardDelete);
    res.status(200).json(boardDelete);
});
export { boardRouter };
