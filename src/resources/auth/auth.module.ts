import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { User } from '../users/user.entity';
import { UsersService } from '../users/users.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    TypeOrmModule.forFeature([User]),
    UsersModule,
    JwtModule.register({
      secret: 'qwer',
    }),
  ],
})
export class AuthModule {}
