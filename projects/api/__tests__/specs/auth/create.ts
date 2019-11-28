import request, { Response } from 'supertest'
import server from '../../../src/app'
import { IStringTMap } from '../../../src/interfaces/generic'
import jwtDecode from 'jwt-decode'

interface IUserToken {
    email: string,
    password?: string,
}

describe('POST /auth/create', () => {
    it('Creates a user', async () => {
        const user: IStringTMap<string> = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@bitsky.be',
            password: 'iliketrains!',
        }

        const res: Response = await request(server)
            .post('/auth/create')
            .send(user)
            .expect(200)

        const decodedToken: IUserToken = jwtDecode(res.body)
        expect(decodedToken).toBeTruthy()
        expect(decodedToken.email).toBe('john.doe@bitsky.be')
        expect(decodedToken.password).toBe(undefined)
    })

    it('Returns a bad request because email is already taken', async () => {
        const user: IStringTMap<string> = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@bitsky.be',
            password: 'iliketrains!',
        }

        const res: Response = await request(server)
            .post('/auth/create')
            .send(user)
            .expect(400)

        expect(res.body.message).toBe('email_already_taken')
    })
})
