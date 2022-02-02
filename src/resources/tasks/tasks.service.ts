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
    return await this.tasksRepository.find({ where: { boardId } });
  }

  async getOne({ tasksId, boardId }) {
    return await this.tasksRepository.findOne(tasksId, boardId);
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

  async remove(id: string) {
    return await this.tasksRepository.delete(id);
  }

  async update(id: string, updateTasksDto: UpdateTasksDto) {
    return await this.tasksRepository.update(id, updateTasksDto);
  }
}
