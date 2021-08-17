import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common'
import { pick } from 'lodash'
import bcrypt from 'bcrypt'
import { DateTime } from 'luxon'
import Boom, { Boom as BoomType } from '@hapi/boom'
import { getRepository, Repository, getManager, EntityManager } from 'typeorm'

import { User } from './user.entity'
import { generateToken } from '../../helpers/auth'
import { AuthGuard } from './auth.guard'
import { UserLogInData, UserOnboardingData, UserSignUpData } from '../../interfaces/user'
import { AuthenticatedRequest } from '../../interfaces/server'
import { UserFromRequest } from '../../interfaces/user'

/**
 * This private method checks the user's credentials and generates a token
 * @param email string user's email
 * @param password string user's password
 * @param remember boolean the login screen's "remember me" checkbox
 * @returns Promise
 */
const _authenticate = async (
    email: string,
    password: string,
    remember: boolean = false
): Promise<Partial<User> | BoomType> => {
    const repository: Repository<User> = getRepository(User)
    const user: User | undefined = await repository.findOne({ where: { email } })

    if (!user) {
        return Boom.badRequest('user_not_found')
    }

    const passwordMatch: boolean = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
        return Boom.badRequest('incorrect_password')
    }

    const data: Partial<User> = pick(user, [
        'id',
        'firstName',
        'lastName',
        'email',
        'theme',
        'username',
    ])
    const token: string = generateToken(data, remember)

    // Hashing token & storing it in the db
    const saltRounds: number = parseInt(process.env.SALT_ROUNDS ?? '10', 10)
    user.token = await bcrypt.hash(token, saltRounds)
    await repository.save(user)

    return { ...data, token }
}

@Controller('auth')
export class AuthController {
    /**
     * This method create a new user
     * @param data Partial<User> the new user's data
     * @returns Promise
     */
    @Post('/signup')
    async signup(@Body() data: UserSignUpData): Promise<Partial<User> | BoomType> {
        // Hashing password
        const saltRounds: number = parseInt(process.env.SALT_ROUNDS ?? '10', 10)
        const clearPassword: string = data.password
        data.password = await bcrypt.hash(clearPassword, saltRounds)

        try {
            await getManager().transaction(
                async (transactionalEntityManager: EntityManager): Promise<User> => {
                    // Check unique email
                    const emailTaken: number = await transactionalEntityManager.count(User, {
                        where: { email: data.email },
                    })

                    if (emailTaken) {
                        throw Boom.badRequest('email_already_taken')
                    }

                    // Saving user
                    const user: User = transactionalEntityManager.create(User, data)
                    return transactionalEntityManager.save(user)
                }
            )
        } catch (e) {
            return Boom.boomify(e as Error)
        }

        // Generating token & deleting password
        return _authenticate(data.email, clearPassword)
    }

    /**
     * This method is a bridge to the authentication method
     * used to log the user in
     * @param data UserLogInData the user's data needed to log him in
     * @returns Promise
     */
    @Post('/login')
    async login(@Body() data: UserLogInData): Promise<Partial<User> | BoomType> {
        return _authenticate(data.email, data.password, data.remember)
    }

    /**
     * This method updates the user with its onboarding data
     * @param user RequestUser the decoded token
     * @param data IUser the user's onboarding data
     * @returns Promise
     */
    @Post('/onboarding')
    @UseGuards(AuthGuard)
    async onboarding(
        @Req() request: AuthenticatedRequest,
        @Body() data: UserOnboardingData
    ): Promise<Partial<User> | BoomType> {
        const { username, birthdate }: UserOnboardingData = data
        const { email }: UserFromRequest = request.user

        const convertedBirthdate: DateTime = DateTime.fromFormat(birthdate!, 'dd/LL/yyyy')

        const today: DateTime = DateTime.local()
        const pastLimit: DateTime = DateTime.fromFormat('01/01/1900', 'dd/LL/yyyy')

        if (
            birthdate?.includes('_') ||
            convertedBirthdate > today ||
            convertedBirthdate < pastLimit
        ) {
            return Boom.badRequest('invalid_birthdate')
        }

        try {
            let user: User | undefined

            await getManager().transaction(
                async (transactionalEntityManager: EntityManager): Promise<void> => {
                    // Check unique username
                    const usernameTaken: number = await transactionalEntityManager.count(User, {
                        where: { username },
                    })

                    if (usernameTaken) {
                        throw Boom.badRequest('username_already_taken')
                    }

                    // Saving new data
                    await transactionalEntityManager.update(User, { email: email }, { ...data })

                    user = await transactionalEntityManager.findOne(User, {
                        email: email,
                    })
                }
            )

            if (!user) {
                throw Boom.notFound('user_not_found')
            }

            const userSafeData: Partial<User> = pick(user, [
                'id',
                'firstName',
                'lastName',
                'email',
                'theme',
                'username',
            ])

            return { ...userSafeData, token: generateToken(data) }
        } catch (e) {
            return Boom.boomify(e as Error)
        }
    }
}
