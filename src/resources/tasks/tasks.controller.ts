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
@UseGuards(JwtAuthGuard)
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
    @Param('boardId', ParseUUIDPipe) boardId: string,
    @Body(new ValidationPipe()) createTasksDto: CreateTasksDto,
  ) {
    const newTask = { ...createTasksDto, boardId };
    return await this.tasksService.create(newTask);
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body(new ValidationPipe()) updateTasksDto: UpdateTasksDto,
  ) {
    return await this.tasksService.update(id, updateTasksDto);
  }

  @Delete(':tasksId')
  async remove(
    @Param('boardId', ParseUUIDPipe) boardId: string,
    @Param('tasksId', ParseUUIDPipe) tasksId: string,
  ) {
    return await this.tasksService.remove(boardId, tasksId);
  }
}
