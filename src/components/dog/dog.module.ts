import { Module } from '@nestjs/common';
import { DogService } from './dog.service';
import { DogsController } from './dog.controller';

@Module({ controllers: [DogsController], providers: [DogService] })
export class DogModule {}
