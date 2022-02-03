import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
  ValidationPipe,
  ParseUUIDPipe,
} from '@nestjs/common';
import { CreateTasksDto } from './dto/tasks-create.dto';
import { UpdateTasksDto } from './dto/tasks-update.dto';
import { TasksService } from './tasks.service';

@Controller('/boards/:boardId/tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  async getAll() {
    return await this.tasksService.getAll();
  }

  @Get(':tasksId')
  async getBoard(
    @Param('boardId', ParseUUIDPipe) boardId: string,
    @Param('tasksId', ParseUUIDPipe) tasksId: string,
  ) {
    return this.tasksService.getOne(boardId, tasksId);
  }

  @Post()
  async create(
    @Param('boardId') boardId: string,
    @Body(new ValidationPipe()) createTasksDto: CreateTasksDto,
  ) {
    const newTask = { ...createTasksDto, boardId };
    const postTasks = await this.tasksService.create(newTask);
    return postTasks;
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTasksDto: UpdateTasksDto,
  ) {
    const putTasks = await this.tasksService.update(id, updateTasksDto);
    return putTasks;
  }

  @Delete(':tasksId')
  async remove(
    @Param('boardId', ParseUUIDPipe) boardId: string,
    @Param('tasksId', ParseUUIDPipe) tasksId: string,
  ) {
    const delTasks = await this.tasksService.remove(boardId, tasksId);
    console.log(`delTasks`);
    console.log(delTasks);
    return delTasks;
  }
}
