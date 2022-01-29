import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { CreateTasksDto } from './dto/tasks-create.dto';
import { UpdateTasksDto } from './dto/tasks-update.dto';
import { TasksService } from './tasks.service';
import { Tasks } from './tasks.entity';

@Controller('board/:boardId/tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAll(): Promise<Tasks[]> {
    return this.tasksService.getAll();
  }
  // getAll(): string {
  //   return 'GetAll';
  // }

  //   @Get(':id')
  //   getOne(@Param() params) {
  //     return 'getOne' + params.id;
  //   }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Tasks> {
    return this.tasksService.getOne(id);
  }
  //   getOne(@Param('id') id: string): string {
  //     return 'getOne' + id;
  //   }

  @Post()
  create(@Body() createTasksDto: CreateTasksDto): Promise<Tasks> {
    console.log(createTasksDto);
    return this.tasksService.create(createTasksDto);
  }
  //   create(@Body() createUsersDto: CreateUsersDto): string {
  //     return `id: ${createUsersDto.id} name:${createUsersDto.name} login:${createUsersDto.login}`;
  //   }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.tasksService.remove(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTasksDto: UpdateTasksDto) {
    return this.tasksService.update(id, updateTasksDto);
  }
}
