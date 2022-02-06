import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import * as path from 'path';
import * as fs from 'fs';
import * as uuid from 'uuid';

@Injectable()
export class StorageService {
  watchFile(namefile) {
    try {
      const pathFile = path.resolve(__dirname, '..', 'static');
      const data = fs.readFileSync(pathFile + '/' + namefile, 'utf8');
      return data;

      // fs.readFile(pathFile + '/' + namefile, 'utf8', function (error, data) {
      //   console.log('Reading a file');
      //   if (error) throw error;
      //   console.log(data);
      //   return data;
      // });
    } catch (err) {
      throw new HttpException(
        'Error watch file',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async createFileStorage(file) {
    try {
      const unicNameFile = uuid.v4() + '.txt';
      // const unicNameFile = uuid.v4() + '.jpg';
      const pathFile = path.resolve(__dirname, '..', 'static');
      if (!fs.existsSync(pathFile)) {
        fs.mkdirSync(pathFile, { recursive: true });
      }
      fs.writeFileSync(path.join(pathFile, unicNameFile), file.buffer);
      return unicNameFile;
    } catch (err) {
      throw new HttpException(
        'Error save file',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
