import { Logger, Module } from '@nestjs/common';
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
import { ConfigModule } from '@nestjs/config';
import { UsersService } from './resources/users/users.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import path from 'path';
import { HttpExceptionFilter } from './http-exception/http-exception.filter';
import { APP_FILTER } from '@nestjs/core';

@Module({
  imports: [
    UsersModule,
    BoardModule,
    TasksModule,
    FileModule,
    AuthModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env['POSTGRES_HOST'],
      port: Number(process.env['POSTGRES_PORT']),
      username: process.env['POSTGRES_USER'],
      password: process.env['POSTGRES_PASSWORD'],
      database: process.env['POSTGRES_DB'],
      entities: [User, Board, Tasks, File],
      synchronize: true,
      dropSchema: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([User]),
    //регистрация пути к статической папке из которой раздается file
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, './resources/static'),
    }),
  ],

  controllers: [AppController],
  providers: [
    AppService,
    UsersService,
    Logger,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
