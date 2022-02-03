import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm/repository/Repository';
import { InjectRepository } from '@nestjs/typeorm';
import { File } from './file.entity';
import { StorageService } from '../storage/storage.service';
import { CreateFileDto } from '../file/dto/fileCreate.dto';

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(File) private fileRepository: Repository<File>,
    private storageService: StorageService,
  ) {}

  async create(createFileDto: CreateFileDto, image: any) {
    console.log('QQQQ');

    const filename = await this.storageService.createFileStorage(image);
    const saveFileRep = await this.fileRepository.create({
      ...createFileDto,
      image: filename,
    });
    return saveFileRep;
  }
}
