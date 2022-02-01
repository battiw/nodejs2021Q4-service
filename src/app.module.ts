import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './resources/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { User } from './resources/users/user.entity';
import { Tasks } from './resources/tasks/tasks.entity';
import { Board } from './resources/board/board.entity';
import { File } from './resources//file/file.entity';
import { BoardModule } from './resources/board/board.module';
import { TasksModule } from './resources/tasks/tasks.module';
import { FileModule } from './resources/file/file.module';
import { AuthModule } from './resources/auth/auth.module';

@Module({
  imports: [
    UsersModule,
    BoardModule,
    TasksModule,
    FileModule,
    AuthModule,

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'qwer',
      database: 'postgres',
      entities: [User, Board, Tasks, File],
      synchronize: true,
      dropSchema: true,
      autoLoadEntities: true,
    }),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
