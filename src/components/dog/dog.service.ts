import { Injectable } from '@nestjs/common';
import { DogType } from 'src/interface/dog.interface';
import { DogDTO } from 'src/dto/dog.dto';
import { dogsDb } from 'src/database/dogs';

@Injectable()
export class DogService {
  findAll(): DogType[] {
    return dogsDb;
  }

  addDog(dog: DogDTO): string {
    dogsDb.push(dog);
    return 'success';
  }
}
