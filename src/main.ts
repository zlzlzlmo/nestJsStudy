import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 모든 전역에서 오는 요청에 대한 pipe 설정
  // pipe는 incoming request에 대한 validation 처리를 해준다.
  // DTO를 사용해서 한다 (Data Transfer Object의 줄임말)
  // pipe -> guard -> controller -> service -> repository

  // 내부적으로 validation pipe에서 class-transformer를 사용하여 body를 dto 클래스로 바까준다.
  // 그리고 class-validator를 사용하여 instance를 validate 처리해준다.
  // validation error가 발생시 즉시 error 뱉는다
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
