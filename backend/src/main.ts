import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import serverless from 'serverless-http';
import express from 'express';
import { ExpressAdapter } from '@nestjs/platform-express/adapters';

const expressApp = express();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Projects API')
    .setDescription('API documentation for Projects endpoints')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.init(); // IMPORTANT: no listen(), just init()
}

bootstrap().catch(err => {
  console.error('NestJS bootstrap failed', err);
});

export const handler = serverless(expressApp);
