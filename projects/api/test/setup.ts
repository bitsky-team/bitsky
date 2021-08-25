import { Test, TestingModule } from '@nestjs/testing'
import { getConnection } from 'typeorm'
import { INestApplication } from '@nestjs/common'

import { AppModule } from '../src/modules/app/app.module'

jest.setTimeout(30000)

declare global {
    interface Window {
        server: any
        app: INestApplication
    }
}

beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
        imports: [AppModule],
    }).compile()

    const app = moduleFixture.createNestApplication()
    await app.init()

    window.app = app
    window.server = app.getHttpServer()
})

afterEach(async () => {
    const entities = getConnection().entityMetadatas

    for (const entity of entities) {
        const repository = getConnection().getRepository(entity.name)
        await repository.clear()
    }
})

afterAll(async () => {
    return window.app.close()
})
