import { InjectRepository } from '@nestjs/typeorm'
import { Connection, Repository } from 'typeorm'
import bcrypt from 'bcrypt'
import { pick } from 'lodash'

import { generateToken } from '../../helpers/auth'
import { User } from './user.entity'
import { UserSignUpData, UserOnboardingData, UserFromRequest } from '../../interfaces/user'
import { HttpException, HttpStatus } from '@nestjs/common'

export class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private readonly connection: Connection
    ) {}

    async findOne(email: string): Promise<User | undefined> {
        return this.userRepository.findOne({ where: { email } })
    }

    /**
     * This private method checks the user's credentials and generates a token
     * @param email string user's email
     * @param password string user's password
     * @param remember boolean the login screen's "remember me" checkbox
     * @returns Promise
     */
    async authenticate(
        email: string,
        password: string,
        remember: boolean = false
    ): Promise<Partial<User>> {
        const user: User | undefined = await this.findOne(email)

        if (!user) {
            throw new HttpException('user_not_found', HttpStatus.BAD_REQUEST)
        }

        const passwordMatch: boolean = await bcrypt.compare(password, user.password)

        if (!passwordMatch) {
            throw new HttpException('incorrect_password', HttpStatus.BAD_REQUEST)
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
        await this.userRepository.save(user)

        return { ...data, token }
    }

    async signup(data: UserSignUpData): Promise<User | undefined> {
        const queryRunner = this.connection.createQueryRunner()
        await queryRunner.connect()
        await queryRunner.startTransaction()

        try {
            const emailTaken: number = await queryRunner.manager.count(User, {
                where: { email: data.email },
            })

            if (emailTaken) {
                throw new HttpException('email_already_taken', HttpStatus.BAD_REQUEST)
            }

            const user: User = queryRunner.manager.create(User, data)
            return await queryRunner.manager.save(user)
        } catch (err) {
            await queryRunner.rollbackTransaction()
            throw err
        } finally {
            await queryRunner.release()
        }
    }

    async onboard({ email }: UserFromRequest, data: UserOnboardingData): Promise<User | undefined> {
        const queryRunner = this.connection.createQueryRunner()
        await queryRunner.connect()
        await queryRunner.startTransaction()

        try {
            const usernameTaken: number = await queryRunner.manager.count(User, {
                where: { username: data.username },
            })

            if (usernameTaken) {
                throw new HttpException('username_already_taken', HttpStatus.BAD_REQUEST)
            }

            await queryRunner.manager.update(User, { email: email }, { ...data })

            return await queryRunner.manager.findOne(User, {
                email: email,
            })
        } catch (err) {
            await queryRunner.rollbackTransaction()
            throw err
        } finally {
            await queryRunner.release()
        }
    }
}
