import request, { Response } from 'supertest'
import { startApp } from '../../../src/app'
import { IStringTMap } from '../../../src/interfaces/generic'

const app = startApp()

describe('POST /auth/create', () => {
    it('Create a user', async () => {
        const user: IStringTMap<string> = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@bitsky.be',
            password: 'iliketrains!',
        }

        const res: Response = await request(app)
            .post('/auth/create')
            .send(user)
            .expect(200)

        expect(res.body.email).toBe('john.doe@bitsky.be')
        expect(res.body.password).toBe(undefined)
    })

    it('Returns a bad request because email is already taken', async () => {
        const user: IStringTMap<string> = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@bitsky.be',
            password: 'iliketrains!',
        }

        const res: Response = await request(app)
            .post('/auth/create')
            .send(user)
            .expect(400)

        expect(res.body.message).toBe('email_already_taken')
    })
})
