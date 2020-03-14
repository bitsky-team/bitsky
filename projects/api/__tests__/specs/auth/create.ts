import request, { Response } from 'supertest'
import jwtDecode from 'jwt-decode'
import { getRepository, Repository } from 'typeorm'

import server from '../../../src/app'
import { johnDoe } from '../../mocks/user'
import { User } from '../../../src/entities'

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
        const decodedToken: IUserToken = jwtDecode(res.body.token)
        expect(decodedToken).toBeTruthy()
        expect(decodedToken.email).toBe('john.doe@bitsky.be')
        expect(decodedToken.password).toBe(undefined)
    })

    it('Returns a bad request because email is already taken', async () => {
        // Simulating that the email is already taken
        // by creating the user before
        const repository: Repository<User> = getRepository(User)
        const user = await repository.create(johnDoe)
        await repository.save(user)

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
