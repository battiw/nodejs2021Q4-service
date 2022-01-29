import { Columns } from './column-create.dto';

export class CreateBoardDto {
  id: string;
  title: string;
  // columns: string;
  columns: Columns[];
}
