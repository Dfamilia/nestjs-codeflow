import { Injectable } from '@nestjs/common';
import { IDog, IDogParam } from '../../interface/dog.interface';
import { DogDTO } from '../../dto/dog.dto';
import { dogsDb } from '../../database/dogs';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class DogService {
  findAll(): IDog[] {
    return dogsDb;
  }

  addDog(dog: DogDTO): IDog {
    const newDog: DogDTO = {
      ...dog,
      id: uuidv4(),
      fecha: new Date(),
    };
    dogsDb.push(newDog);
    return newDog;
  }

  findOne(id: string): IDog {
    return dogsDb.filter((dog: IDog) => dog.id === id).at(0);
  }

  deleteById(id: string): IDog {
    const deletedDog = dogsDb.findById(id);
    dogsDb.filter((dog: IDog) => dog.id !== id);
    return deletedDog;
  }
  updateItem(dog: IDogParam): IDog {
    const { id, payload } = dog;
    console.log('klk', id, payload);
    return {
      id: 'hola0',
      nombre: 'string',
      tipo: 'string',
      fecha: new Date('2024-06-25'),
    };
  }
}
