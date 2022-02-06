import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './http-exception/http-exception.filter';
import { UsersService } from './resources/users/users.service';
import {
  utilities as nestWinstonModuleUtilities,
  WinstonModule,
} from 'nest-winston';
import * as winston from 'winston';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const PORT = process.env['PORT'] || 4000;
  const USE_FASTIFY = process.env['USE_FASTIFY'];
  console.log(USE_FASTIFY);
  // const app = await NestFactory.create(AppModule, {
  //   logger: ['log', 'error', 'warn'],
  // });
  if (USE_FASTIFY == 'express') {
    const app = await NestFactory.create<NestExpressApplication>(AppModule, {
      logger: WinstonModule.createLogger({
        transports: [
          new winston.transports.Console({
            format: winston.format.combine(
              winston.format.timestamp(),
              winston.format.ms(),
              nestWinstonModuleUtilities.format.nestLike('NESTLOGEXPRESS', {
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
              nestWinstonModuleUtilities.format.nestLike('NESTLOGEXPRESS', {
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
              nestWinstonModuleUtilities.format.nestLike('NESTLOGEXPRESS', {
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
              nestWinstonModuleUtilities.format.nestLike('NESTLOGEXPRESS', {
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
    await app.listen(PORT, () =>
      console.log(`Platform server with EXPRESS started on port ${PORT}`),
    );
  }
  if (USE_FASTIFY == 'fastify') {
    const app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter(),
      // new FastifyAdapter({ logger: true }),
      {
        logger: WinstonModule.createLogger({
          transports: [
            new winston.transports.Console({
              format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.ms(),
                nestWinstonModuleUtilities.format.nestLike('NESTLOGFASTIFY', {
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
                nestWinstonModuleUtilities.format.nestLike('NESTLOGFASTIFY', {
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
                nestWinstonModuleUtilities.format.nestLike('NESTLOGFASTIFY', {
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
                nestWinstonModuleUtilities.format.nestLike('NESTLOGFASTIFY', {
                  prettyPrint: true,
                }),
              ),
            }),
          ],
        }),
      },
    );
    const createAdminService = app.get(UsersService); // select service from repository
    createAdminService.createAdmin(); // sterted function create newadmin
    app.useGlobalFilters(new HttpExceptionFilter());
    await app.listen(PORT, '0.0.0.0', () =>
      console.log(`Platform server with FASTIFY started on port ${PORT}`),
    );
  }
}

bootstrap();
