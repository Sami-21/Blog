import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  public FullName: string;

  @IsEmail()
  public email: string;

  @IsString()
  public password: string;
}
