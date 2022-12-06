import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { createDocument } from './swagger/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('/api/v1');
  SwaggerModule.setup('api', app, createDocument(app));
  await app.listen(3000);
}

try {
  bootstrap();
} catch (error: any) {
  console.log('Caught error in main.ts', error.message);
}
