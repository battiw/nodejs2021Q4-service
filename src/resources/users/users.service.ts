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
    @InjectRepository(Tasks) private tasksRepository: Repository<Tasks>, // @Inject('winston') private readonly logger: Logger,
  ) {}

  async getAll() {
    // this.logger.info('Returning suggestions...');
    return await this.usersRepository.find();
  }

  async getOne(id: string) {
    // this.logger.info('Returning suggestions...');

    return await this.usersRepository.findOne(id);
  }

  async create(createUsersDto: CreateUsersDto) {
    // this.logger.info('Returning suggestions...');
    // this.logger.error('Error Returning suggestions...');
    // this.logger.warn('Warn Returning suggestions...');

    const chekPasswordUser = await hashPassword(createUsersDto.password);
    createUsersDto.password = chekPasswordUser;
    return this.usersRepository.save(createUsersDto);
  }

  async remove(id: string) {
    // this.logger.info('Returning suggestions...');

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
  }

  async update(id: string, updateUsersDto: UpdateUsersDto) {
    // this.logger.info('Returning suggestions...');

    const arrUsersRepository = this.usersRepository;
    await arrUsersRepository.update(id, updateUsersDto);
    return updateUsersDto;
  }

  async createAdmin() {
    // this.logger.info('Returning suggestions...');

    const createAdmin = new User();

    const adminFind = await this.usersRepository.findOne({
      where: { login: 'admin', name: 'admin' },
    });
    if (!adminFind) {
      const chekPasswordAdmin = await hashPassword(createAdmin.password);
      createAdmin.password = chekPasswordAdmin;
      this.usersRepository.save(createAdmin);
    }
    console.log('ADMIN EXISTS');
  }
}
