import { getConnection } from 'typeorm'

import { launch } from '../src/app'
import server from '../src/app'


beforeAll(async () => {
    await launch(false)
})

afterEach(async () => {
    await getConnection().synchronize(true)
})

afterAll(async () => {
    await server.close()
})