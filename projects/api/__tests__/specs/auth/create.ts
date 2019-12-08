import request, { Response } from 'supertest'
import jwtDecode from 'jwt-decode'

import server from '../../../src/app'
import { johnDoe } from '../../mocks/user'

interface IUserToken {
    email: string,
    password?: string,
}

describe('POST /auth/create', () => {
    it('Creates a user', async () => {
        // Sending the data
        const res: Response = await request(server)
            .post('/auth/create')
            .send(johnDoe)
            .expect(200)

        // Checking if the response is coherent
        const decodedToken: IUserToken = jwtDecode(res.body)
        expect(decodedToken).toBeTruthy()
        expect(decodedToken.email).toBe('john.doe@bitsky.be')
        expect(decodedToken.password).toBe(undefined)
    })

    it('Returns a bad request because email is already taken', async () => {
        // Sending the data
        const res: Response = await request(server)
            .post('/auth/create')
            .send(johnDoe) // Same user than the first test, creating an email conflict
            .expect(400)

        // As I already registered my user with this email
        // I should receive an bad request with this message
        // which is the translation key
        expect(res.body.message).toBe('email_already_taken')
    })
})
