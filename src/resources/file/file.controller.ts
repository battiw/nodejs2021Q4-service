import {
  Body,
  Controller,
  Get,
  Param,
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

  // @Get(':id')
  // getOne(@Param('id') id: string) /* : Promise<File> */ {
  //   return this.fileService.getOne(id);
  // }

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  uploadFile(@Body() createFileDto: CreateFileDto, @UploadedFile() image) {
    return this.fileService.create(createFileDto, image);
  }
}
