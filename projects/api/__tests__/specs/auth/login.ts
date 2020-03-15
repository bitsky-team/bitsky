import request, { Response } from 'supertest'
import jwtDecode from 'jwt-decode'
import { getRepository, Repository } from 'typeorm'
import bcrypt from 'bcrypt'

import server from '../../../src/app'
import { johnDoe } from '../../mocks/user'
import { User } from '../../../src/entities'

interface IUserToken {
    email: string,
    password?: string,
}

describe('POST /auth/login', () => {
    it('Login successfully', async () => {
        const repository: Repository<User> = getRepository(User)
        const saltRounds: number = parseInt(`${process.env.SALT_ROUNDS}`, 10)
        const password = await bcrypt.hash(johnDoe.password, saltRounds)

        const user = await repository.create({
            ...johnDoe,
            password
        })
        await repository.save(user)

        // Sending the data
        const res: Response = await request(server)
            .post('/auth/login')
            .send({
                email: johnDoe.email,
                password: johnDoe.password,
                remember: false,
            })
            .expect(200)

        // Checking if the response is coherent
        const decodedToken: IUserToken = jwtDecode(res.body.token)
        expect(decodedToken).toBeTruthy()
        expect(decodedToken.email).toBe('john.doe@bitsky.be')
        expect(decodedToken.password).toBe(undefined)
    })

    it('Login unsuccessfully (user not found)', async () => {
        // Sending the data
        const res: Response = await request(server)
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
        const repository: Repository<User> = getRepository(User)
        const user = await repository.create(johnDoe)
        await repository.save(user)

        // Sending the data
        const res: Response = await request(server)
            .post('/auth/login')
            .send({
                email: johnDoe.email,
                password: johnDoe.password,
                remember: false,
            })
            .expect(400)

        expect(res.body.message).toBe('incorrect_password')
    })
})
