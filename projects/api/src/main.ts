import { NestFactory } from '@nestjs/core';
import dotenv from 'dotenv';
const { version } = require('../package.json');

import { AppModule } from './modules';
import { ServerLogger, logLevels } from './utils/ServerLogger';
import { serverGreetings } from './constants/art';

async function bootstrap() {
  dotenv.config();

  const app = await NestFactory.create(AppModule, {
    cors: true,
    logger: ['error'],
  });

  app.use(ServerLogger.newRequest());
  app.use(ServerLogger.error());

  const port = process.env.HTTP_PORT;

  await app.listen(port);

  ServerLogger.log(serverGreetings, logLevels.MISC);
  ServerLogger.log(
    `Version: ${version}                                     ${process.env.MODE} mode\n`,
    logLevels.MISC,
  );
  ServerLogger.log(`Server started on port ${port}`);
}

bootstrap();
