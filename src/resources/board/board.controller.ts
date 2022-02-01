import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
  Res,
} from '@nestjs/common';
import { CreateBoardDto } from './dto/board-create.dto';
import { UpdateBoardDto } from './dto/board-update.dto';
import { BoardService } from './board.service';
import { Board } from './board.entity';
import { Request, Response } from 'express';

@Controller('boards')
export class BoardController {
  constructor(private boardService: BoardService) {}

  @Get()
  async getAll() {
    return await this.boardService.getAll();
  }

  //   getAll(): string {
  //     return 'GetAll';
  //   }

  //   @Get(':id')
  //   getOne(@Param() params) {
  //     return 'getOne' + params.id;
  //   }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return await this.boardService.getOne(id);
  }
  //   getOne(@Param('id') id: string): string {
  //     return 'getOne' + id;
  //   }

  @Post()
  async create(@Body() createBoardDto: CreateBoardDto) {
    // console.log(createBoardDto);
    return await this.boardService.create(createBoardDto);
  }
  //   create(@Body() createUsersDto: CreateUsersDto): string {
  //     return `id: ${createUsersDto.id} name:${createUsersDto.name} login:${createUsersDto.login}`;
  //   }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBoardDto: UpdateBoardDto,
  ) {
    return await this.boardService.update(id, updateBoardDto);
  }

  @Delete(':id')
  async remove(@Res() res: Response, @Param('id') id: string) {
    const delBoard = await this.boardService.remove(id);
    console.log(delBoard);
    console.log(typeof delBoard);

    // if (delBoard) {
    //   res.status(200).json(delBoard);
    // } else {
    //   res.status(404).json({});
    // }
    // return this.boardService.remove(id);
  }
}
