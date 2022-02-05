import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { CreateFileDto } from './dto/fileCreate.dto';
import { FileService } from './file.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('file')
export class FileController {
  constructor(private fileService: FileService) {}

  @Get(':filename')
  async getFile(@Param('filename') filename: string) {
    const aaa = await this.fileService.getOneFile(filename);

    return aaa;
  }

  @Post()
  @UseInterceptors(FileInterceptor('filesave'))
  uploadFile(
    @Body(new ValidationPipe()) createFileDto: CreateFileDto,
    @UploadedFile() filesave,
  ) {
    return this.fileService.create(createFileDto, filesave);
  }
}
