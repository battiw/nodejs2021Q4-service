import { Injectable } from '@nestjs/common';
import { CreateTasksDto } from './dto/tasks-create.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tasks } from './tasks.entity';
import { Repository } from 'typeorm';
import { UpdateTasksDto } from './dto/tasks-update.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Tasks) private tasksRepository: Repository<Tasks>,
  ) {}

  async getAll(boardId) {
    // const arrAllTasks = this.tasksRepository;
    // const allTasks = await arrAllTasks.find();
    // console.log(`allTasks`);
    // console.log(allTasks);

    // return allTasks;
    return await this.tasksRepository.find(boardId);
  }

  async getOne(boardId: string, taskId: string) {
    return await this.tasksRepository.findOne(taskId);
  }
  // async getOne(id: string) {
  //   return await this.tasksRepository.findOne(id);
  // }

  async create(createTasksDto: CreateTasksDto) {
    const createTasks = await this.tasksRepository.save(createTasksDto);
    return createTasks;
  }

  async remove(id: string) {
    return await this.tasksRepository.delete(id);
  }

  async update(id: string, updateTasksDto: UpdateTasksDto) {
    return await this.tasksRepository.update(id, updateTasksDto);
  }
}
