import { Module } from '@nestjs/common';
import { Board } from './board.entity';
import { Tasks } from '../tasks/tasks.entity';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Board, Tasks])],
  providers: [BoardService],
  controllers: [BoardController],
})
export class BoardModule {}
