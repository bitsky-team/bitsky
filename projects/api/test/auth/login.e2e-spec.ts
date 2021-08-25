import request from 'supertest'

import { johnDoe } from '../mockups/user'
import { decode } from '../../src/utils/jwt'
import { UserFromRequest } from '../../src/interfaces/user'

describe('POST /auth/login', () => {
    it('Login successfully', async () => {
        await request(window.server).post('/auth/signup').send(johnDoe)

        // Sending the data
        const res: any = await request(window.server)
            .post('/auth/login')
            .send({
                email: johnDoe.email,
                password: johnDoe.password,
                remember: false,
            })
            .expect(200)

        // Checking if the response is coherent
        const decodedToken: UserFromRequest = decode(res.body.token)
        expect(decodedToken).toBeTruthy()
        expect(decodedToken.email).toBe('john.doe@bitsky.be')
        expect((decodedToken as any).password).toBe(undefined)
    })

    it('Login unsuccessfully (user not found)', async () => {
        // Sending the data
        const res: any = await request(window.server)
            .post('/auth/login')
            .send({
                email: johnDoe.email,
                password: johnDoe.password,
                remember: false,
            })
            .expect(400)

        expect(res.body.message).toBe('user_not_found')
    })

    it('Login unsuccessfully (incorrect password)', async () => {
        await request(window.server).post('/auth/signup').send(johnDoe)

        // Sending the data
        const res: any = await request(window.server)
            .post('/auth/login')
            .send({
                email: johnDoe.email,
                password: 'very nice password but not the good one',
                remember: false,
            })
            .expect(400)

        expect(res.body.message).toBe('incorrect_password')
    })
})
