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
import { CreateBoardDto } from './dto/board-create.dto';
import { UpdateBoardDto } from './dto/board-update.dto';
import { BoardService } from './board.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('boards')
@UseGuards(JwtAuthGuard)
export class BoardController {
  constructor(private boardService: BoardService) {}

  @Get()
  async getAll() {
    const getBoard = await this.boardService.getAll();
    return getBoard;
  }

  @Get(':id')
  async getOne(@Param('id', ParseUUIDPipe) id: string) {
    const getIdBoard = await this.boardService.getOne(id);
    return getIdBoard;
  }

  @Post()
  async create(@Body(new ValidationPipe()) createBoardDto: CreateBoardDto) {
    const postBoard = await this.boardService.create(createBoardDto);
    return postBoard;
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body(new ValidationPipe()) updateBoardDto: UpdateBoardDto,
  ) {
    const putBoard = await this.boardService.update(id, updateBoardDto);
    return putBoard;
  }

  @Delete(':id')
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    await this.boardService.remove(id);
  }
}
