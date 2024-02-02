import { Injectable } from '@nestjs/common';
import { DogType } from 'src/types/dog';
import { dogsDb } from 'src/database/dogs';

@Injectable()
export class DogService {
  findAll(): DogType[] {
    return dogsDb;
  }

  addDog(dog: DogType): string {
    dogsDb.push(dog);
    return 'success';
  }
}
