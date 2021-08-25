import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import dotenv from 'dotenv'
import { join } from 'path'

export enum MODE {
    DEVELOPMENT = 'development',
    PRODUCTION = 'production',
}

export class Config {
    private static instance: Config = new Config()
    public isTestContext: boolean = false

    private constructor() {
        dotenv.config()
        this.isTestContext = this.get('JEST_WORKER_ID') !== undefined
    }

    static getInstance(): Config {
        return Config.instance
    }

    get(key: string): any {
        return process.env[key]
    }

    get typeOrmConfig(): TypeOrmModuleOptions {
        return {
            type: this.get('PG_TYPE'),
            host: this.get('PG_HOST'),
            port: this.get('PG_PORT'),
            username: this.get(`PG_${this.isTestContext ? 'TEST_' : ''}USERNAME`),
            password: this.get(`PG_${this.isTestContext ? 'TEST_' : ''}PASSWORD`),
            database: this.get(`PG_${this.isTestContext ? 'TEST_' : ''}DATABASE`),
            synchronize: true,
            entities: [join(__dirname, '**', '*.entity.{ts,js}')],
            logging: this.get('MODE') === MODE.DEVELOPMENT && !this.isTestContext && true,
            keepConnectionAlive: true,
        }
    }
}
