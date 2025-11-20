import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import serverless from 'serverless-http';
import express from 'express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

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
  SwaggerModule.setup('docs', app, document);

  await app.init(); // no listen()
}

bootstrap().catch(console.error);

export default serverless(expressApp);
