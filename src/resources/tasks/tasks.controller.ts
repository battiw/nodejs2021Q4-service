import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
  Res,
} from '@nestjs/common';
import { CreateTasksDto } from './dto/tasks-create.dto';
import { UpdateTasksDto } from './dto/tasks-update.dto';
import { TasksService } from './tasks.service';
import { Request, Response } from 'express';

@Controller('board/:boardId/tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  async getAll(@Res() res: Response) {
    // const allFindTasks = await this.tasksService.getAll();
    // console.log(`allFindTasks`);
    // console.log(allFindTasks);

    return await this.tasksService.getAll();

    // if (allFindTasks === null || allFindTasks === undefined) {
    //   res.status(404).json('WRONG');
    // } else {
    //   res.status(200).json(allFindTasks);
    // }
  }
  @Get(':id')
  async getOne(@Param('id') id: string) {
    return await this.tasksService.getOne(id);
  }

  @Post()
  async create(
    @Param('boardId') boardId: string,
    @Body() createTasksDto: CreateTasksDto,
  ) {
    const newTask = { ...createTasksDto, boardId };
    return await this.tasksService.create(newTask);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.tasksService.remove(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTasksDto: UpdateTasksDto,
  ) {
    return await this.tasksService.update(id, updateTasksDto);
  }
}
