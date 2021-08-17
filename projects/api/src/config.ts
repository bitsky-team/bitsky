import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import dotenv from 'dotenv';
import { join } from 'path';

export enum MODE {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
}

export class Config {
  private static instance: Config = new Config();

  private constructor() {
    dotenv.config();
  }

  static getInstance(): Config {
    return Config.instance;
  }

  get(key: string): any {
    return process.env[key];
  }

  get typeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: this.get('PG_TYPE'),
      host: this.get('PG_HOST'),
      port: this.get('PG_PORT'),
      username: this.get('PG_USERNAME'),
      password: this.get('PG_PASSWORD'),
      database: this.get('PG_DATABASE'),
      synchronize: true,
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
    };
  }
}
