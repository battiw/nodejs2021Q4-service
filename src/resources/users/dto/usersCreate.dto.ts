import { IsString } from 'class-validator';

export class CreateUsersDto {
  id: string;

  @IsString()
  name: string;

  @IsString()
  login: string;

  @IsString()
  password: string;
}
