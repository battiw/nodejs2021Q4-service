"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserServis = exports.putUserServis = exports.getIDServis = exports.postUserServis = exports.getAllServis = void 0;
const user_memory_repository_1 = require("./user.memory.repository");
/**
 * Service function
 * @returns function call result getAllMemory
 */
const getAllServis = () => (0, user_memory_repository_1.getAllMemory)();
exports.getAllServis = getAllServis;
/**
 * Service function
 * @param createUser  - user with parameters
 * @returns function call result postUserMemory
 */
const postUserServis = (createUser) => (0, user_memory_repository_1.postUserMemory)(createUser);
exports.postUserServis = postUserServis;
/**
 * Service function
 * @param idNumber -  id user
 * @returns function call result getIDMemory
 */
const getIDServis = (idNumber) => (0, user_memory_repository_1.getIDMemory)(idNumber);
exports.getIDServis = getIDServis;
/**
 * Service function
 * @param createUserPut - user with parameters
 * @param idNumberPut - id user
 * @returns function call result putUserMemory
 */
const putUserServis = (createUserPut, idNumberPut) => (0, user_memory_repository_1.putUserMemory)(createUserPut, idNumberPut);
exports.putUserServis = putUserServis;
/**
 * Service function
 * @param idNumberDelete - id user
 * @returns function call result deleteUserMemory
 */
const deleteUserServis = (idNumberDelete) => (0, user_memory_repository_1.deleteUserMemory)(idNumberDelete);
exports.deleteUserServis = deleteUserServis;
