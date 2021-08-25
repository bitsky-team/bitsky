import request from 'supertest'

import { johnDoe } from '../mockups/user'
import { decode } from '../../src/utils/jwt'
import { UserFromRequest } from '../../src/interfaces/user'

describe('POST /auth/signup', () => {
    it('Creates a user', async () => {
        // Sending the data
        const response: any = await request(window.server)
            .post('/auth/signup')
            .send(johnDoe)
            .expect(200)

        // Checking if the response is coherent
        const decodedToken: UserFromRequest = decode(response.body.token)
        expect(decodedToken).toBeTruthy()
        expect(decodedToken.email).toBe('john.doe@bitsky.be')
        expect((decodedToken as any).password).toBe(undefined)
    })

    it('Returns a bad request because email is already taken', async () => {
        // Simulating that the email is already taken
        // by creating the user before
        await request(window.server).post('/auth/signup').send(johnDoe).expect(200)

        // Sending the data
        const secondResponse: any = await request(window.server)
            .post('/auth/signup')
            .send(johnDoe) // Same user than the first test, creating an email conflict
            .expect(400)

        // As I already signed up my user with this email
        // I should receive an bad request with this message
        // which is the translation key
        expect(secondResponse.body.message).toBe('email_already_taken')
    })
})
