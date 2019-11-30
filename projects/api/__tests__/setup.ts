import { getConnection, getConnectionManager, Connection, ConnectionManager } from 'typeorm'

beforeAll(async () => {
    const connectionManager: ConnectionManager = getConnectionManager()
    const connection: Connection = connectionManager.create({
        type: 'postgres',
        host: 'localhost',
        port: 54320,
        username: 'test',
        password: 'test',
        database: 'bitsky_test',
        entities: ['../src/entities/*.ts'],
        logging: false,
        synchronize: true,
    })
    await connection.connect()
})

afterAll(async () => {
    await getConnection().dropDatabase()
    await getConnection().close()
})
