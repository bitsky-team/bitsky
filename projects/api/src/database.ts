import { ConnectionOptions } from 'typeorm'

export const productionConfig: ConnectionOptions = {
    type: 'postgres',
    host: process.env.DB_HOST?.length ? process.env.DB_HOST : 'localhost',
    port: 5432,
    username: 'admin',
    password: 'admin',
    database: 'bitsky',
    entities: ['src/entities/*.ts'],
    logging: true,
    synchronize: true,
    dropSchema: false,
}

export const testConfig: ConnectionOptions = {
    type: 'postgres',
    host: process.env.DB_HOST?.length ? process.env.DB_HOST : 'localhost',
    port: 5432,
    username: 'test',
    password: 'test',
    database: 'bitsky_test',
    entities: ['src/entities/*.ts'],
    logging: false,
    synchronize: true,
    dropSchema: false,
}
