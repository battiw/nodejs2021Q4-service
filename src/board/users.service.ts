import { Injectable } from '@nestjs/common';
import { CreateUsersDto } from '../resources/users/dto/usersCreate.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../resources/users/user.entity';
import { Repository } from 'typeorm';
import { UpdateUsersDto } from '../resources/users/dto/usersUpdate.dto';
import { hashPassword } from '../hashHelper/chekHash';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async getAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async getOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async create(createUsersDto: CreateUsersDto): Promise<User> {
    const chekPasswordUser = await hashPassword(createUsersDto.password);
    createUsersDto.password = chekPasswordUser;
    return this.usersRepository.save(createUsersDto);
    // return this.usersRepository.save({...createUsersDto, id: uuid()});
    // return newUser.save();
    // return this.users.push({
    //   ...createUsersDto,
    //   id: uuid(),
    // });
  }

  async remove(id: string): Promise<void> {
    this.usersRepository.delete(id);
  }

  async update(id: string, updateUsersDto: UpdateUsersDto) {
    const chekUpdataPasswordUser = await hashPassword(updateUsersDto.password);
    updateUsersDto.password = chekUpdataPasswordUser;
    return this.usersRepository.update(id, updateUsersDto);
  }
}
