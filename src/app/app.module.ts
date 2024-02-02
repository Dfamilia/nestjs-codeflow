import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsController } from 'src/components/dog/dog.controller';
import { DogService } from 'src/components/dog/dog.service';

@Module({
  imports: [],
  controllers: [AppController, DogsController],
  providers: [AppService, DogService],
})
export class AppModule {}
