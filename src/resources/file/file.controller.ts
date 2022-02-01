import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileService } from './/file.service';
import { Express } from 'express';
import { SampleDto } from './dto/sample.dto';

@Controller('file')
export class FileController {
  constructor(private fileService: FileService) {}

  @Get(':id')
  getOne(@Param('id') id: string) /* : Promise<File> */ {
    return this.fileService.getOne(id);
  }

  @Post('file')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(
    // @Body() body: SampleDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    // return { body, file: file.buffer.toString() };
    console.log(file);
  }
  // @Post()
  // create(@Body() createUsersDto: CreateFileDto): Promise<File> {
  //   console.log(createUsersDto);
  //   return this.fileService.create(createUsersDto);
  // }
}
