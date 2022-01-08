"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putTaskServis = exports.deleteTaskServis = exports.getIdTaskServis = exports.postTaskServis = exports.getAllTasks = void 0;
const tasks_memory_repository_1 = require("./tasks.memory.repository");
/**
 * Service function
 * @returns function call result getTasks
 */
const getAllTasks = () => (0, tasks_memory_repository_1.getTasks)();
exports.getAllTasks = getAllTasks;
/**
 * Service function
 * @param createTasks  - task with parameters
 * @returns function call result postTasksMemory
 */
const postTaskServis = (createTasks) => (0, tasks_memory_repository_1.postTasksMemory)(createTasks);
exports.postTaskServis = postTaskServis;
/**
 * Service function
 * @param idTasks -  id task
 * @returns function call result getIdTaskMemory
 */
const getIdTaskServis = (idTasks) => (0, tasks_memory_repository_1.getIdTaskMemory)(idTasks);
exports.getIdTaskServis = getIdTaskServis;
/**
 * Service function
 * @param createPutTasks - task with parameters
 * @param idNumberPut - id task
 * @returns function call result putTaskMemory
 */
const putTaskServis = (createPutTasks, idputTasks) => (0, tasks_memory_repository_1.putTaskMemory)(createPutTasks, idputTasks);
exports.putTaskServis = putTaskServis;
/**
 * Service function
 * @param idTasksDel - id task
 * @returns function call result deleteTaskMemory
 */
const deleteTaskServis = (idTasksDel) => (0, tasks_memory_repository_1.deleteTaskMemory)(idTasksDel);
exports.deleteTaskServis = deleteTaskServis;
