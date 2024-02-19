import { Injectable } from '@nestjs/common';
import { IDog, IDogParam } from '../../interface/dog.interface';
import { DogDTO } from '../../dto/dog.dto';
import { getDogsDb, setDogsDb } from '../../database/dogs';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class DogService {
  // getAll
  findAll(): IDog[] {
    return getDogsDb();
  }

  // create
  addDog(dog: DogDTO): IDog {
    const newDog = {
      ...dog,
      id: uuidv4(),
      fecha: new Date(),
    };
    setDogsDb(newDog);
    return newDog;
  }

  // get by id
  findOne(id: string): IDog {
    return getDogsDb().find((dog: IDog) => dog.id === id);
  }

  // delete by id
  deleteById(id: string): IDog {
    const deletedDog = getDogsDb().find((dog) => dog.id === id);
    setDogsDb(getDogsDb().filter((dog) => dog.id !== id));
    return deletedDog;
  }

  // update by id
  updateById(dog: IDogParam): IDog {
    const newDog = {
      ...dog.payload,
      id: dog.id,
      fecha: new Date(),
    };

    const dogsList = getDogsDb().map((e: IDog) =>
      e.id === newDog.id ? { ...newDog } : e,
    );
    setDogsDb(dogsList);
    return newDog;
  }
}
