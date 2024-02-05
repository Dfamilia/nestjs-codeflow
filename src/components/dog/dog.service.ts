import { Injectable } from '@nestjs/common';
import { IDog } from '../../interface/dog.interface';
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
}
