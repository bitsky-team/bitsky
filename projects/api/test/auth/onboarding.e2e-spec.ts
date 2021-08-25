import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import request from 'supertest'
import { getConnection } from 'typeorm'

import { johnDoe } from '../mockups/user'
import { AppModule } from '../../src/modules/app/app.module'
import { User } from '../../src/modules/user/user.entity'

describe('POST /auth/onboarding', () => {
    let app: INestApplication
    let server: any

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile()

        app = moduleFixture.createNestApplication()
        await app.init()
        server = app.getHttpServer()
    })

    afterEach(async () => {
        const entities = getConnection().entityMetadatas

        for (const entity of entities) {
            const repository = getConnection().getRepository(entity.name)
            await repository.clear()
        }
    })

    it('Invalid birthdate (year < 1900) generates `invalid_birthdate` error message', async () => {
        const data: Partial<User> = {
            avatar: 'placeholder',
            username: 'TheTester',
            birthdate: '01/01/1899',
            description: 'My super description',
        }

        // Sending the data
        const signupRes: any = await request(server).post('/auth/signup').send(johnDoe).expect(200)
        const token: string = signupRes.body.token

        const onboardingRes: any = await request(server)
            .post('/auth/onboarding')
            .set('Authorization', `Bearer ${token}`)
            .send(data)
            .expect(400)

        expect(onboardingRes.body.message).toBe('invalid_birthdate')
    })

    it('Invalid birthdate (year > actual year) generates `invalid_birthdate` error message', async () => {
        const data: Partial<User> = {
            avatar: 'placeholder',
            username: 'TheTester',
            birthdate: '01/01/2900',
            description: 'My super description',
        }

        // Sending the data
        const signupRes: any = await request(server).post('/auth/signup').send(johnDoe).expect(200)
        const token: string = signupRes.body.token

        const onboardingRes: any = await request(server)
            .post('/auth/onboarding')
            .set('Authorization', `Bearer ${token}`)
            .send(data)
            .expect(400)

        expect(onboardingRes.body.message).toBe('invalid_birthdate')
    })

    it('Invalid birthdate (incomplete) generates `invalid_birthdate` error message', async () => {
        const data: Partial<User> = {
            avatar: 'placeholder',
            username: 'TheTester',
            birthdate: '01/01/199_',
            description: 'My super description',
        }

        // Sending the data
        const signupRes: any = await request(server).post('/auth/signup').send(johnDoe).expect(200)
        const token: string = signupRes.body.token

        const onboardingRes: any = await request(server)
            .post('/auth/onboarding')
            .set('Authorization', `Bearer ${token}`)
            .send(data)
            .expect(400)

        expect(onboardingRes.body.message).toBe('invalid_birthdate')
    })

    it('Valid data successfully onboard and generates `username_already_taken` on the second attempt', async () => {
        const data: Partial<User> = {
            avatar: 'placeholder',
            username: 'TheTester',
            birthdate: '01/01/1997',
            description: 'My super description',
        }

        // Sending the data
        const signupRes: any = await request(server).post('/auth/signup').send(johnDoe).expect(200)
        const token: string = signupRes.body.token

        // First onboarding is ok
        await request(server)
            .post('/auth/onboarding')
            .set('Authorization', `Bearer ${token}`)
            .send(data)
            .expect(200)

        // We resend the same data in order to have the username taken error
        const onboardingRes: any = await request(server)
            .post('/auth/onboarding')
            .set('Authorization', `Bearer ${token}`)
            .send(data)
            .expect(400)

        expect(onboardingRes.body.message).toBe('username_already_taken')
    })
})
