import { Columns } from './column-create.dto';
import { ArrayNotEmpty, IsArray, IsString } from 'class-validator';

export class CreateBoardDto {
  id: string;

  @IsString()
  title: string;

  @ArrayNotEmpty()
  @IsArray()
  columns: Columns[];
}
