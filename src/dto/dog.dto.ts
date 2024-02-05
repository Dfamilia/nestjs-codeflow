import { IsString, IsDate, IsNotEmpty, MinLength } from 'class-validator';

export class DogDTO {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  nombre: string;

  @IsString()
  @IsNotEmpty()
  tipo: string;

  @IsDate()
  fecha: Date;
}
