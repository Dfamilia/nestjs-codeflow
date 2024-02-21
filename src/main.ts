import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';
import { AllExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // PERMITE USAR LAS VALIDACIONES DE "class-validator" GLOBALMENTE.
  app.useGlobalPipes(new ValidationPipe());
  // PERMITE USAR LAS EXCEPTIONCES CUSTOMIZADAS QUE CREAMOS GLOABALMENTE.
  app.useGlobalFilters(new AllExceptionFilter());
  await app.listen(3000);
}
bootstrap();
