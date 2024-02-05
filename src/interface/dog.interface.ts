import { DogDTO } from '../dto/dog.dto';

export interface IDog {
  id?: string;
  nombre: string;
  tipo: string;
  fecha?: Date;
}

export interface IDogParam {
  id?: string;
  payload?: DogDTO;
}
