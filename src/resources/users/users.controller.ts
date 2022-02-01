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
  async getAll() {
    return await this.usersService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return await this.usersService.getOne(id);
  }
  @Post()
  async create(@Body() createUsersDto: CreateUsersDto) {
    const createUser = await this.usersService.create(createUsersDto);
    return User.toResponse(createUser);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const delUser = await this.usersService.remove(id);
    return User.toResponse(delUser);

    // return this.usersService.remove(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUsersDto: UpdateUsersDto,
  ) {
    const putUser = await this.usersService.update(id, updateUsersDto);
    return User.toResponse(putUser);

    // return this.usersService.update(id, updateUsersDto);
  }
}
