import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
  UseGuards,
  ValidationPipe,
  ParseUUIDPipe,
} from '@nestjs/common';
import { CreateUsersDto } from '../users/dto/usersCreate.dto';
import { UpdateUsersDto } from '../users/dto/usersUpdate.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getAll() {
    return await this.usersService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id', ParseUUIDPipe) id: string) {
    return await this.usersService.getOne(id);
  }

  @Post()
  async create(@Body(new ValidationPipe()) createUsersDto: CreateUsersDto) {
    const createUser = await this.usersService.create(createUsersDto);
    return User.toResponse(createUser);
  }

  @Delete(':id')
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    const delUser = await this.usersService.remove(id);
    return User.toResponse(delUser);

    // return this.usersService.remove(id);
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body(new ValidationPipe()) updateUsersDto: UpdateUsersDto,
  ) {
    const putUser = await this.usersService.update(id, updateUsersDto);
    return User.toResponse(putUser);
    // return this.usersService.update(id, updateUsersDto);
  }
}
