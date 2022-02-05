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

  async getOneFile(filename: string) {
    // const findFileOne = await this.fileRepository.findOne(filename);
    // console.log(findFileOne);
    // console.log(typeof findFileOne);

    const fileOneWatch = await this.storageService.watchFile(filename);
    return fileOneWatch;
  }

  async create(createFileDto: CreateFileDto, filesave) {
    const filename = await this.storageService.createFileStorage(filesave);
    const saveFileRep = await this.fileRepository.create({
      ...createFileDto,
      filesave: filename,
    });
    this.fileRepository.save(saveFileRep);

    return saveFileRep;
  }
}
