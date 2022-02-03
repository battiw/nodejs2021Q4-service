import { Module } from '@nestjs/common';
import path from 'path';
import { StorageService } from './storage.service';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  providers: [StorageService],
  exports: [StorageService],
})
export class StorageModule {}
