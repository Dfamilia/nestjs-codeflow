import { Controller, Get, Post, Req } from '@nestjs/common';
import { DogType } from 'src/interface/dog.interface';
import { DogDTO } from 'src/dto/dog.dto';
import { DogService } from './dog.service';
import { Request } from 'express';

@Controller('api/dogs')
export class DogsController {
  constructor(private readonly dogService: DogService) {}

  @Get()
  findAll(): DogType[] {
    return this.dogService.findAll();
  }

  @Post()
  addDog(@Req() request: Request): string {
    const dog: DogDTO = {
      ...request.body,
      fecha: new Date(),
    };
    return this.dogService.addDog(dog);
  }
}
