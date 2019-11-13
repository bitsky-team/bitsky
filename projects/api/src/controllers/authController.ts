import { getRepository, Repository } from 'typeorm'
import { User } from '../entities'
import { IUser } from '../interfaces'
import Boom, { Boom as BoomType } from '@hapi/boom'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { secretKey } from '../constants/secret'
import { DateTime } from 'luxon'

/**
 * This private method checks the user's credentials and generates a token
 * @param email user's email
 * @param password user's password
 */
const authenticate = async (email: string, password: string, remember: boolean = false): Promise<string | BoomType> => {
    const repository: Repository<User> = getRepository(User)
    const user: User | undefined = await repository.findOne({ where: { email }})

    if (!user) {
        return Boom.badRequest('user_not_found')
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
        return Boom.badRequest('incorrect_password')
    }

    delete user.password

    const today = DateTime.local().toSeconds()
    const dayInSeconds = 86400

    return jwt.sign({
        ...user,
        exp: remember ? today + (30 * dayInSeconds): today + dayInSeconds,
    }, secretKey)
}

export const authController = {
    create: async (data: IUser): Promise<string | BoomType> => {
        const repository: Repository<User> = getRepository(User)

        // Check unique email
        const emailTaken = await repository.count({ where: { email: data.email }})

        if (emailTaken) {
            return Boom.badRequest('email_already_taken')
        }

        // Hashing password
        const saltRounds: number = parseInt(`${process.env.SALT_ROUNDS}`, 10)
        const clearPassword: string = data.password
        data.password = await bcrypt.hash(clearPassword, saltRounds)

        // Saving user
        const user: User = repository.create(data)
        await repository.save(user)

        // Generating token & deleting password
        return authenticate(data.email, clearPassword)
    },

    login: async (data: IUser): Promise<string | BoomType> => {
        return authenticate(data.email, data.password, data.remember)
    },
}
