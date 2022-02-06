import { forwardRef, Module } from '@nestjs/common';
import { Board } from './board.entity';
import { Tasks } from '../tasks/tasks.entity';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Board, Tasks]),
    forwardRef(() => AuthModule),
  ],
  providers: [BoardService],
  controllers: [BoardController],
})
export class BoardModule {}
