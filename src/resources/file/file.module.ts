import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileController } from './file.controller';
import { FileService } from './file.service';
import { File } from './file.entity';
import { StorageModule } from '../storage/storage.module';
import { ServeStaticModule } from '@nestjs/serve-static';

import path from 'path';

@Module({
  imports: [TypeOrmModule.forFeature([File]), StorageModule],
  providers: [FileService],
  controllers: [FileController],
})
export class FileModule {}
