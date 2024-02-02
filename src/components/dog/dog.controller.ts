import { Controller, Get, Post } from '@nestjs/common';
import { DogType } from 'src/types/dog';
import { DogService } from './dog.service';

@Controller('api/dogs')
export class DogsController {
  constructor(private readonly dogService: DogService) {}

  @Get()
  findAll(): DogType[] {
    return this.dogService.findAll();
  }

  @Post()
  addDog(): string {
    const dog: DogType = {
      nombre: 'Capitan',
      tipo: 'viralata',
      fecha: new Date('2020-05-26'),
    };
    return this.dogService.addDog(dog);
  }
}
