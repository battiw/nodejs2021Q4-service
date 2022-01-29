import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { CreateBoardDto } from './dto/board-create.dto';
import { UpdateBoardDto } from './dto/board-update.dto';
import { BoardService } from './board.service';
import { Board } from './board.entity';

@Controller('boards')
export class BoardController {
  constructor(private boardService: BoardService) {}

  @Get()
  getAll(): Promise<Board[]> {
    return this.boardService.getAll();
  }

  //   getAll(): string {
  //     return 'GetAll';
  //   }

  //   @Get(':id')
  //   getOne(@Param() params) {
  //     return 'getOne' + params.id;
  //   }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Board> {
    return this.boardService.getOne(id);
  }
  //   getOne(@Param('id') id: string): string {
  //     return 'getOne' + id;
  //   }

  @Post()
  create(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
    console.log(createBoardDto);
    return this.boardService.create(createBoardDto);
  }
  //   create(@Body() createUsersDto: CreateUsersDto): string {
  //     return `id: ${createUsersDto.id} name:${createUsersDto.name} login:${createUsersDto.login}`;
  //   }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.boardService.remove(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBoardDto: UpdateBoardDto) {
    return this.boardService.update(id, updateBoardDto);
  }
}
