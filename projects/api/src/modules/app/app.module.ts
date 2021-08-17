import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Config } from '.././../config';

import { UserModule } from '../user/user.module';

const modules = [UserModule];

@Module({
  imports: [
    ...modules,
    TypeOrmModule.forRoot(Config.getInstance().typeOrmConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
