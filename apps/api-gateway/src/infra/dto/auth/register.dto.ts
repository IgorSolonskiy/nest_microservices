import {
  IsString,
  IsEmail,
  IsNotEmpty,
  MinLength,
  MaxLength,
} from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @MinLength(5)
  @MaxLength(30)
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(20)
  password: string;
}
