import { IsNumber, IsString, MinLength } from 'class-validator'


export class CreateEventDto {
  @IsString()
  @MinLength(1)
  name: string

  @IsString()
  @MinLength(1)
  description: string

  @IsString()
  @MinLength(1)
  image: string;

  @IsNumber()
  cityId: number;
}
