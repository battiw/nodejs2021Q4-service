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
    const boardsRepository = this.boardRepository;
    const newBoard = boardsRepository.create(createBoardDto);
    const addedBoard = boardsRepository.save(newBoard);
    return addedBoard;

    // return this.boardRepository.save(createBoardDto);

    // return this.usersRepository.save({...createUsersDto, id: uuid()});
    // return newUser.save();
    // return this.users.push({
    //   ...createUsersDto,
    //   id: uuid(),
    // });
  }

  async update(id: string, updateBoardDto: UpdateBoardDto) {
    const test = this.boardRepository.update(id, updateBoardDto);
    // return await this.boardRepository.update(id, updateBoardDto);
    console.log(test);

    return updateBoardDto;
  }

  async remove(id: string) {
    const arrBoardsRepository = this.boardRepository;
    const resultBoardDel = await arrBoardsRepository.delete(id);
    console.log(`resultBoardDel`);
    console.log(resultBoardDel);
    console.log(typeof resultBoardDel);

    return resultBoardDel.raw;

    // this.boardRepository.delete(id);
  }
}
