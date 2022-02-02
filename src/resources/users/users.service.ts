/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUsersDto } from '../users/dto/usersCreate.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Tasks } from '../tasks/tasks.entity';
import { Repository } from 'typeorm';
import { UpdateUsersDto } from '../users/dto/usersUpdate.dto';
import { hashPassword } from '../../hashHelper/chekHash';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    @InjectRepository(Tasks) private tasksRepository: Repository<Tasks>,
  ) {}

  async getAll() {
    return await this.usersRepository.find();
  }

  async getOne(id: string) {
    return await this.usersRepository.findOne(id);
  }

  async create(createUsersDto: CreateUsersDto) {
    const chekPasswordUser = await hashPassword(createUsersDto.password);
    createUsersDto.password = chekPasswordUser;
    return this.usersRepository.save(createUsersDto);
  }

  async remove(id: string) {
    const arrTasksRepository = this.tasksRepository;
    const arrayOfTasks = await arrTasksRepository.find({
      where: { userId: id },
    });
    if (arrayOfTasks.length > 0) {
      for (let i = 0; i < arrayOfTasks.length; i += 1) {
        const idTasks = arrayOfTasks[i]!.id;
        const newObj = { ...arrayOfTasks[i], userId: null };
        arrTasksRepository.update(idTasks, newObj);
      }
    }

    const arrUsersRepository = this.usersRepository;
    const resultDel = await arrUsersRepository.delete(id);
    return resultDel.raw;
    // this.usersRepository.delete(id);
  }

  async update(id: string, updateUsersDto: UpdateUsersDto) {
    // const chekUpdataPasswordUser = await hashPassword(updateUsersDto.password);
    // updateUsersDto.password = chekUpdataPasswordUser;
    const arrUsersRepository = this.usersRepository;
    await arrUsersRepository.update(id, updateUsersDto);
    return updateUsersDto;
    // return this.usersRepository.update(id, updateUsersDto);
  }

  async getHello() {
    const createAdmin = new User();
    const chekPasswordAdmin = await hashPassword(createAdmin.password);
    createAdmin.password = chekPasswordAdmin;
    await this.usersRepository.save(createAdmin);
  }
}
