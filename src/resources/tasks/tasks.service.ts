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

  async getAll(): Promise<Tasks[]> {
    return this.tasksRepository.find();
  }

  async getOne(id: string): Promise<Tasks> {
    return this.tasksRepository.findOne(id);
  }

  async create(createTasksDto: CreateTasksDto): Promise<Tasks> {
    return this.tasksRepository.save(createTasksDto);
    // return this.usersRepository.save({...createUsersDto, id: uuid()});
    // return newUser.save();
    // return this.users.push({
    //   ...createUsersDto,
    //   id: uuid(),
    // });
  }

  async remove(id: string): Promise<void> {
    this.tasksRepository.delete(id);
  }

  async update(id: string, updateTasksDto: UpdateTasksDto) {
    return this.tasksRepository.update(id, updateTasksDto);
  }
}
