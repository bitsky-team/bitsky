import { getConnection, getConnectionManager, Connection, ConnectionManager } from 'typeorm'

beforeAll(async () => {
    // Setting up a connection to the database
    const connectionManager: ConnectionManager = getConnectionManager()
    const connection: Connection = connectionManager.create({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'test',
        password: 'test',
        database: 'bitsky_test',
        entities: ['../src/entities/*.ts'],
        logging: false,
        synchronize: true,
    })

    // Connecting to the database
    await connection.connect()
})

afterAll(async () => {
    // Dropping the database
    await getConnection().dropDatabase()

    // Closing the connection to the database
    await getConnection().close()
})
