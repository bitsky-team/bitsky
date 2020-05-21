import { getConnection } from 'typeorm'

import { launch } from '../src/app'
import server from '../src/app'

jest.setTimeout(10000)

beforeAll(async () => {
    await launch(false)
})

afterEach(async () => {
    await getConnection().synchronize(true)
})

afterAll(() => {
    server.close()
})
