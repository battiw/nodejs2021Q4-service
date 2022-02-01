import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUsersDto } from '../users/dto/usersCreate.dto';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { chekHashedPassword } from 'src/hashHelper/chekHash';
import { User } from '../users/user.entity';
import { Repository } from 'typeorm';
import { token } from 'morgan';
import { strictEqual } from 'assert';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async login(createUsersDto: CreateUsersDto) {
    const arrRepository = await this.usersRepository.findOne({
      login: createUsersDto.login,
    });

    const pasСomparison = await chekHashedPassword(
      createUsersDto.password,
      arrRepository.password,
    );

    if (pasСomparison) {
      const userFindId = arrRepository.id;
      const userFindLogin = arrRepository.login;
      const token = this.jwtService.sign({ userFindId, userFindLogin });
      return token;
    } else {
      return null;
    }
  }
}
