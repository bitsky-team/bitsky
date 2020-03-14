import { getConnection } from 'typeorm'

import { launch } from '../src/app'

beforeAll(async () => {
    await launch()
})

afterEach(async () => {
    await getConnection().synchronize(true)
})