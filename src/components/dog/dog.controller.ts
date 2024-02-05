import { Controller, Delete, Get, Param, Post, Req } from '@nestjs/common';
import { IDog } from '../../interface/dog.interface';
import { DogService } from './dog.service';
import { Request } from 'express';

@Controller('api/dogs')
export class DogsController {
  constructor(private readonly dogService: DogService) {}

  @Get()
  findAll(): IDog[] {
    return this.dogService.findAll();
  }

  @Get('/:id')
  getById(@Param('id') id: string): IDog {
    return this.dogService.findOne(id);
  }

  @Post()
  addDog(@Req() request: Request): IDog {
    return this.dogService.addDog(request.body);
  }

  @Delete('/:id')
  deleteById(@Param('id') id: string): IDog {
    return this.dogService.deleteById(id);
  }
}
