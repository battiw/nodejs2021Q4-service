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
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateTasksDto } from './dto/tasks-create.dto';
import { UpdateTasksDto } from './dto/tasks-update.dto';
import { TasksService } from './tasks.service';

@Controller('/boards/:boardId/tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAll() {
    return await this.tasksService.getAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':tasksId')
  async getBoard(
    @Param('boardId', ParseUUIDPipe) boardId: string,
    @Param('tasksId', ParseUUIDPipe) tasksId: string,
  ) {
    return this.tasksService.getOne(boardId, tasksId);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Param('boardId') boardId: string,
    @Body(new ValidationPipe()) createTasksDto: CreateTasksDto,
  ) {
    const newTask = { ...createTasksDto, boardId };
    const postTasks = await this.tasksService.create(newTask);
    return postTasks;
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTasksDto: UpdateTasksDto,
  ) {
    const putTasks = await this.tasksService.update(id, updateTasksDto);
    return putTasks;
  }

  @UseGuards(JwtAuthGuard)
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
