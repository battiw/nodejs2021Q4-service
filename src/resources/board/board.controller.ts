import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CreateBoardDto } from './dto/board-create.dto';
import { UpdateBoardDto } from './dto/board-update.dto';
import { BoardService } from './board.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('boards')
export class BoardController {
  constructor(private boardService: BoardService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAll() {
    const getBoard = await this.boardService.getAll();
    return getBoard;
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getOne(@Param('id') id: string) {
    const getIdBoard = await this.boardService.getOne(id);
    return getIdBoard;
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createBoardDto: CreateBoardDto) {
    // console.log(createBoardDto);
    const postBoard = await this.boardService.create(createBoardDto);
    return postBoard;
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBoardDto: UpdateBoardDto,
  ) {
    const putBoard = await this.boardService.update(id, updateBoardDto);
    return putBoard;
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const delBoard = await this.boardService.remove(id);
    console.log(delBoard);
    console.log(typeof delBoard);
  }
}
