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

  async login(createUsersDto: CreateUsersDto): Promise<{ token: string }> {
    const arrRepository = await this.usersRepository.findOne({
      login: createUsersDto.login,
    });
    console.log(` createUsersDto.password`);
    console.log(createUsersDto.password);
    console.log(typeof createUsersDto.password);
    console.log(`arrRepository.password`);
    console.log(arrRepository.password);
    console.log(typeof arrRepository.password);

    const pasСomparison = await chekHashedPassword(
      createUsersDto.password,
      arrRepository.password,
    );
    console.log(`pasСomparison`);
    console.log(pasСomparison);
    console.log(typeof pasСomparison);

    if (pasСomparison) {
      console.log(`@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`);
      const userFindId = arrRepository.id;
      const userFindLogin = arrRepository.login;

      console.log(userFindId);
      console.log(userFindLogin);
      const payload = { username: arrRepository.login, sub: arrRepository.id };
      return { token: this.jwtService.sign(payload) };
    } else {
      return null;
    }
  }
}
