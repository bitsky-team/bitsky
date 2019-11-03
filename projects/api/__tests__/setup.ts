import { getConnection, getConnectionManager } from "typeorm"

beforeAll(async () => {
    const connectionManager = getConnectionManager()
    const connection = connectionManager.create({
        "type": "postgres",
        "host": "localhost",
        "port": 54320,
        "username": "test",
        "password": "test",
        "database": "bitsky_test",
        "entities": ["../src/entities/*.ts"],
        "logging": false,
        "synchronize": true
    })
    await connection.connect()
})

afterAll(async () => {
    await getConnection().close()
})
