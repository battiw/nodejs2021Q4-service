import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CreateFileDto } from './dto/fileCreate.dto';
import { FileService } from './file.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('file')
export class FileController {
  constructor(private fileService: FileService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  uploadFile(@Body() createFileDto: CreateFileDto, @UploadedFile() image) {
    return this.fileService.create(createFileDto, image);
  }
}
