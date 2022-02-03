import { Controller, Post, Body, Res } from '@nestjs/common';
import { CreateUsersDto } from '../users/dto/usersCreate.dto';
import { AuthService } from './auth.service';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
import { Repository } from 'typeorm';
import { Request, Response } from 'express';

@Controller('/login')
export class AuthController {
  constructor(private autchService: AuthService) {}

  @Post()
  async login(@Res() res: Response, @Body() createUsersDto: CreateUsersDto) {
    // console.log(`createUsersDto`);
    // console.log(createUsersDto);
    // console.log(typeof createUsersDto);

    const findLogin = await this.autchService.login(createUsersDto);

    if (findLogin === null || findLogin === undefined) {
      res.status(403).json('WRONG');
    } else {
      res.status(201).json(findLogin);
    }
  }
}
