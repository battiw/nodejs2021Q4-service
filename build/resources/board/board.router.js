"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boardRouter = void 0;
// const router = require('express').Router({mergeParams: true});
const express_1 = require("express");
const board_model_1 = require("./board.model");
const board_service_1 = require("./board.service");
const tasks_router_1 = require("../tasks/tasks.router");
// import { IBoard } from '../intefases';
const boardRouter = (0, express_1.Router)({ mergeParams: true });
exports.boardRouter = boardRouter;
boardRouter.use('/:boardId/tasks', tasks_router_1.routerTasks);
boardRouter.route('/').get(async (_req, res) => {
    const boardAll = await (0, board_service_1.getAllBoardServis)();
    res.status(200).json(boardAll);
});
boardRouter.route('/').post(async (req, res) => {
    const createBoard = new board_model_1.Board(req.body);
    const boardPost = await (0, board_service_1.postBoardServis)(createBoard);
    res.status(201).json(boardPost);
});
boardRouter.route('/:boardId').get(async (req, res) => {
    const idBoardID = req.params['boardId'];
    if (idBoardID !== undefined) {
        const boardsID = await (0, board_service_1.getIDBoardsServis)(idBoardID);
        if (!boardsID) {
            res.status(404).json();
        }
        else {
            res.status(200).json(boardsID);
        }
    }
});
boardRouter.route('/:boardId').put(async (req, res) => {
    const idBoardPut = req.params['boardId'];
    const createBorderPut = new board_model_1.Board(req.body);
    if (idBoardPut !== undefined) {
        const boardPut = await (0, board_service_1.putBoardServis)(idBoardPut, createBorderPut);
        res.status(200).json(boardPut);
    }
});
boardRouter.route('/:boardId').delete(async (req, res) => {
    const idBoardDelete = req.params['boardId'];
    if (idBoardDelete !== undefined) {
        const boardDelete = await (0, board_service_1.deleteBoardServis)(idBoardDelete);
        res.status(200).json(boardDelete);
    }
});
boardRouter.use('/*', (_req, res) => {
    return res.status(400).send('Incorrect path');
});
