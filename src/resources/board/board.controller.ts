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
    const getBoard = await this.boardService.getAll();
    return getBoard;
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    const getIdBoard = await this.boardService.getOne(id);
    return getIdBoard;
  }

  @Post()
  async create(@Body() createBoardDto: CreateBoardDto) {
    // console.log(createBoardDto);
    const postBoard = await this.boardService.create(createBoardDto);
    return postBoard;
  }
  //   create(@Body() createUsersDto: CreateUsersDto): string {
  //     return `id: ${createUsersDto.id} name:${createUsersDto.name} login:${createUsersDto.login}`;
  //   }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBoardDto: UpdateBoardDto,
  ) {
    const putBoard = await this.boardService.update(id, updateBoardDto);
    return putBoard;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const delBoard = await this.boardService.remove(id);
    console.log(delBoard);
    console.log(typeof delBoard);
    return delBoard;

    // if (delBoard) {
    //   res.status(200).json(delBoard);
    // } else {
    //   res.status(404).json({});
    // }
    // return this.boardService.remove(id);
  }
}
