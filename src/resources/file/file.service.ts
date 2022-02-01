import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm/repository/Repository';
import { InjectRepository } from '@nestjs/typeorm';
import { File } from './file.entity';

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(File) private usersRepository: Repository<File>,
  ) {}

  async getOne(id: string) {
    return this.usersRepository.findOne(id);
  }

  //   async create(createFileDto: CreateFileDto): Promise<User> {
  //     const chekPasswordUser = await hashPassword(createFileDto.password);
  //     createUsersDto.password = chekPasswordUser;
  //     return this.usersRepository.save(createUsersDto);
}
