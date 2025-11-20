import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import serverless from 'serverless-http';
import express from 'express';
import { ExpressAdapter } from '@nestjs/platform-express/adapters/express-adapter';

const expressApp = express();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
  await app.init();
}
bootstrap();

export default serverless(expressApp);
