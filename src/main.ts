import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './http-exception/http-exception.filter';
import { UsersService } from './resources/users/users.service';
import {
  utilities as nestWinstonModuleUtilities,
  WinstonModule,
} from 'nest-winston';
import * as winston from 'winston';

async function bootstrap() {
  const PORT = process.env['PORT'] || 4000;
  // const app = await NestFactory.create(AppModule, {
  //   logger: ['log', 'error', 'warn'],
  // });
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            nestWinstonModuleUtilities.format.nestLike('NESTLOG', {
              prettyPrint: true,
            }),
          ),
        }),

        new winston.transports.File({
          filename: './src/log/WinstonLog/errorWinston.log',
          level: process.env['ERROR_LEVEL'],
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            nestWinstonModuleUtilities.format.nestLike('NESTLOG', {
              prettyPrint: true,
            }),
          ),
        }),
        new winston.transports.File({
          filename: './src/log/WinstonLog/infoWinston.log',
          level: process.env['LOG_LEVEL'],
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            nestWinstonModuleUtilities.format.nestLike('NESTLOG', {
              prettyPrint: true,
            }),
          ),
        }),
        new winston.transports.File({
          filename: './src/log/WinstonLog/warnWinston.log',
          level: process.env['WARN_LEVEL'],
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            nestWinstonModuleUtilities.format.nestLike('NESTLOG', {
              prettyPrint: true,
            }),
          ),
        }),
      ],
    }),
  });

  const createAdminService = app.get(UsersService); // select service from repository
  createAdminService.createAdmin(); // sterted function create newadmin
  app.useGlobalFilters(new HttpExceptionFilter());
  // app.useGlobalPipes(new ValidationPipe()); //save file
  // app.useGlobalGuards(JwtAuthGuard); // ограничение доступа ко всем endpoint
  await app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}
bootstrap();
