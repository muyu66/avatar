import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';
import * as cors from 'cors';
import * as body_parser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);

  app.use(cors());
  app.use(body_parser.urlencoded({ extended: false }));
  app.use(body_parser.json());

  await app.listen(3000);
  console.log('listening...');
}
bootstrap();
