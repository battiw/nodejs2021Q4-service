import { Columns } from './column-create.dto';

export class UpdateBoardDto {
  id: string;
  title: string;
  columns: Columns[];
}
