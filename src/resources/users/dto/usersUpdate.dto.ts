import { IsString } from 'class-validator';

export class UpdateUsersDto {
  id: string;

  @IsString()
  name: string;

  @IsString()
  login: string;

  @IsString()
  password: string;
}
