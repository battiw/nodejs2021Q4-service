import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
  Res,
  ValidationPipe,
} from '@nestjs/common';
import { CreateTasksDto } from './dto/tasks-create.dto';
import { UpdateTasksDto } from './dto/tasks-update.dto';
import { TasksService } from './tasks.service';
import { Request, Response } from 'express';

@Controller('board')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get(':boardId/tasks')
  async getAll(@Param('boardId') boardId: string) {
    // const allFindTasks = await this.tasksService.getAll();
    // console.log(`allFindTasks`);
    // console.log(allFindTasks);
    return await this.tasksService.getAll(boardId);

    // if (allFindTasks === null || allFindTasks === undefined) {
    //   res.status(404).json('WRONG');
    // } else {
    //   res.status(200).json(allFindTasks);
    // }
  }
  // @Get(':id')
  // async getOne(@Param('id') id: string) {
  //   return await this.tasksService.getOne(id);
  // }

  @Get(':boardId/tasks/:taskId')
  getdOne(@Param('boardId') boardId: string, @Param('taskId') taskId: string) {
    return this.tasksService.getOne(boardId, taskId);
  }

  @Post(':boardId/tasks')
  async create(
    @Param('boardId') boardId: string,
    @Body(new ValidationPipe()) createTasksDto: CreateTasksDto,
  ) {
    const newTask = { ...createTasksDto, boardId };
    const postTasks = await this.tasksService.create(newTask);
    return postTasks;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const delTasks = await this.tasksService.remove(id);
    return delTasks;
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTasksDto: UpdateTasksDto,
  ) {
    const putTasks = await this.tasksService.update(id, updateTasksDto);
    return putTasks;
  }
}
