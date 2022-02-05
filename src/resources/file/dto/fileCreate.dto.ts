import { IsString } from 'class-validator';

export class CreateFileDto {
  id: string;

  @IsString()
  name: string;

  filesave: string;
}
