import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { User } from '../users/user.entity';
import { ConfigModule } from '@nestjs/config';
import { TasksModule } from '../tasks/tasks.module';
import { BoardModule } from '../board/board.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forFeature([User]),
    forwardRef(() => UsersModule),
    forwardRef(() => TasksModule),
    forwardRef(() => BoardModule),
    JwtModule.register({
      secret: process.env['SECRET_KEY'],
      signOptions: { expiresIn: '24h' },
    }),
  ],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
