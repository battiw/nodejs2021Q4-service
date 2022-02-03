import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  async getAll() {
    return await this.tasksRepository.find({});
  }

  async getOne(boardId: string, id: string) {
    const a = await this.tasksRepository.findOne({ boardId, id });

    if (!a) {
      throw new HttpException('not found', HttpStatus.NOT_FOUND);
    }
    return a;
  }

  async create(createTasksDto: CreateTasksDto) {
    console.log(`createTasksDto`);
    console.log(createTasksDto);

    const tasksRepository = this.tasksRepository;

    const newTask = tasksRepository.create(createTasksDto);
    console.log(`newTask`);
    console.log(newTask);

    const addedTask = await tasksRepository.save(newTask);
    console.log(`addedTask`);
    console.log(addedTask);

    return addedTask;

    // const createTasks = await this.tasksRepository.save(createTasksDto);
    // return createTasks;
  }

  async update(id: string, updateTasksDto: UpdateTasksDto) {
    return await this.tasksRepository.update(id, updateTasksDto);
  }

  async remove(boardId: string, id: string) {
    const delTasks = await this.tasksRepository.findOne({ boardId, id });
    if (!delTasks) {
      throw new HttpException('not found', HttpStatus.NOT_FOUND);
    }
    await this.tasksRepository.delete(delTasks.id);
    return delTasks;
  }
}
