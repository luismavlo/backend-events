import { IsString, MinLength } from 'class-validator';


export class CreateCityDto {

  @IsString()
  @MinLength(1)
  name: string;

  @IsString()
  @MinLength(1)
  image: string;

}
