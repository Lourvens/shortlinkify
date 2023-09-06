import { IsAlphanumeric, MinLength } from 'class-validator';

export class CreateUser {
  @IsAlphanumeric()
  username: string;

  @MinLength(6, { message: 'password should be at least 5chars' })
  password: string;
}
