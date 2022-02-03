import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import * as path from 'path';
import * as fs from 'fs';
import * as uuid from 'uuid';

@Injectable()
export class StorageService {
  async createFileStorage(file) {
    console.log(`file`);
    console.log(file);
    try {
      const unicNameFile = uuid.v4() + '.jpg';
      const pathFile = path.resolve(__dirname, '..', 'static');
      if (!fs.existsSync(pathFile)) {
        fs.mkdirSync(pathFile, { recursive: true });
      }
      fs.writeFileSync(path.join(pathFile, unicNameFile), file.buffer);
      return unicNameFile;
    } catch (e) {
      console.log('fffffffffffffffffff');
      throw new HttpException(
        'Error save file',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
