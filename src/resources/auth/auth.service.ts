import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUsersDto } from '../users/dto/usersCreate.dto';
import { JwtService } from '@nestjs/jwt';
import { chekHashedPassword } from 'src/hashHelper/chekHash';
import { User } from '../users/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async login(createUsersDto: CreateUsersDto): Promise<string> {
    const arrRepository = await this.usersRepository.findOne({
      login: createUsersDto.login,
    });

    const pasСomparison = await chekHashedPassword(
      createUsersDto.password,
      arrRepository.password,
    );

    if (pasСomparison) {
      const payload = { username: arrRepository.login, sub: arrRepository.id };
      return this.jwtService.sign(payload);

      // return { token: this.jwtService.sign(payload) };
    } else {
      return null;
    }
  }
}
