/* eslint-disable prettier/prettier */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateBoardDto } from './dto/board-create.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './board.entity';
import { Repository } from 'typeorm';
import { UpdateBoardDto } from './dto/board-update.dto';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board) private boardRepository: Repository<Board>,
  ) {}

  async getAll() {
    return await this.boardRepository.find();
  }

  async getOne(id: string) {
    const idBoard = await this.boardRepository.findOne(id);
    if (!idBoard) {
      throw new HttpException('not found', HttpStatus.NOT_FOUND);
    }
    return idBoard;
    // return this.boardRepository.findOne(id);
  }

  async create(createBoardDto: CreateBoardDto) {
    return this.boardRepository.save(createBoardDto);
    // return this.usersRepository.save({...createUsersDto, id: uuid()});
    // return newUser.save();
    // return this.users.push({
    //   ...createUsersDto,
    //   id: uuid(),
    // });
  }

  async update(id: string, updateBoardDto: UpdateBoardDto) {
    return await this.boardRepository.update(id, updateBoardDto);
  }

  async remove(id: string) {
    const arrBoardsRepository = this.boardRepository;
    const resultBoardDel = await arrBoardsRepository.delete(id);
    return await resultBoardDel.raw;

    // this.boardRepository.delete(id);
  }
}
