import request from 'supertest'

import { johnDoe } from '../mockups/user'
import { User } from '../../src/modules/user/user.entity'

describe('POST /auth/onboarding', () => {
    it('Invalid birthdate (year < 1900) generates `invalid_birthdate` error message', async () => {
        const data: Partial<User> = {
            avatar: 'placeholder',
            username: 'TheTester',
            birthdate: '01/01/1899',
            description: 'My super description',
        }

        // Sending the data
        const signupRes: any = await request(window.server)
            .post('/auth/signup')
            .send(johnDoe)
            .expect(200)
        const token: string = signupRes.body.token

        const onboardingRes: any = await request(window.server)
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
        const signupRes: any = await request(window.server)
            .post('/auth/signup')
            .send(johnDoe)
            .expect(200)
        const token: string = signupRes.body.token

        const onboardingRes: any = await request(window.server)
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
        const signupRes: any = await request(window.server)
            .post('/auth/signup')
            .send(johnDoe)
            .expect(200)
        const token: string = signupRes.body.token

        const onboardingRes: any = await request(window.server)
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
        const signupRes: any = await request(window.server)
            .post('/auth/signup')
            .send(johnDoe)
            .expect(200)
        const token: string = signupRes.body.token

        // First onboarding is ok
        await request(window.server)
            .post('/auth/onboarding')
            .set('Authorization', `Bearer ${token}`)
            .send(data)
            .expect(200)

        // We resend the same data in order to have the username taken error
        const onboardingRes: any = await request(window.server)
            .post('/auth/onboarding')
            .set('Authorization', `Bearer ${token}`)
            .send(data)
            .expect(400)

        expect(onboardingRes.body.message).toBe('username_already_taken')
    })
})
