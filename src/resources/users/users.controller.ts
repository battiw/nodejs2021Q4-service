import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { CreateUsersDto } from '../users/dto/usersCreate.dto';
import { UpdateUsersDto } from '../users/dto/usersUpdate.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getAll(): Promise<User[]> {
    return this.usersService.getAll();
  }

  //   getAll(): string {
  //     return 'GetAll';
  //   }

  //   @Get(':id')
  //   getOne(@Param() params) {
  //     return 'getOne' + params.id;
  //   }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<User> {
    return this.usersService.getOne(id);
  }
  //   getOne(@Param('id') id: string): string {
  //     return 'getOne' + id;
  //   }

  @Post()
  create(@Body() createUsersDto: CreateUsersDto): Promise<User> {
    console.log(createUsersDto);
    return this.usersService.create(createUsersDto);
  }
  //   create(@Body() createUsersDto: CreateUsersDto): string {
  //     return `id: ${createUsersDto.id} name:${createUsersDto.name} login:${createUsersDto.login}`;
  //   }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.usersService.remove(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUsersDto: UpdateUsersDto) {
    return this.usersService.update(id, updateUsersDto);
  }
}
