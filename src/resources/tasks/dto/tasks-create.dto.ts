import { IsNumber, IsString } from 'class-validator';

export class CreateTasksDto {
  id: string;

  @IsString()
  title: string;

  @IsNumber()
  order: number;

  @IsString()
  description: string;

  userId: string | null;
  boardId: string | null;
  columnId: string | null;
}
