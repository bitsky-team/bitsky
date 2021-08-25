import {
    Body,
    Controller,
    HttpCode,
    HttpException,
    HttpStatus,
    Post,
    Req,
    UseGuards,
} from '@nestjs/common'
import { pick } from 'lodash'
import bcrypt from 'bcrypt'
import { DateTime } from 'luxon'

import { User } from './user.entity'
import { generateToken } from '../../helpers/auth'
import { AuthGuard } from './auth.guard'
import { UserLogInData, UserOnboardingData, UserSignUpData } from '../../interfaces/user'
import { AuthenticatedRequest } from '../../interfaces/server'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    /**
     * This method create a new user
     * @param data Partial<User> the new user's data
     * @returns Promise
     */
    @Post('/signup')
    @HttpCode(200)
    async signup(@Body() data: UserSignUpData): Promise<Partial<User>> {
        const saltRounds: number = parseInt(process.env.SALT_ROUNDS ?? '10', 10)
        const clearPassword: string = data.password
        data.password = await bcrypt.hash(clearPassword, saltRounds)

        await this.authService.signup(data)

        // Generating token & deleting password
        return this.authService.authenticate(data.email, clearPassword)
    }

    /**
     * This method is a bridge to the authentication method
     * used to log the user in
     * @param data UserLogInData the user's data needed to log him in
     * @returns Promise
     */
    @Post('/login')
    @HttpCode(200)
    async login(@Body() data: UserLogInData): Promise<Partial<User>> {
        return this.authService.authenticate(data.email, data.password, data.remember)
    }

    /**
     * This method updates the user with its onboarding data
     * @param user RequestUser the decoded token
     * @param data IUser the user's onboarding data
     * @returns Promise
     */
    @Post('/onboarding')
    @UseGuards(AuthGuard)
    @HttpCode(200)
    async onboarding(
        @Req() request: AuthenticatedRequest,
        @Body() data: UserOnboardingData
    ): Promise<Partial<User>> {
        const { birthdate }: UserOnboardingData = data
        const convertedBirthdate: DateTime = DateTime.fromFormat(birthdate!, 'dd/LL/yyyy')

        const today: DateTime = DateTime.local()
        const pastLimit: DateTime = DateTime.fromFormat('01/01/1900', 'dd/LL/yyyy')

        if (
            birthdate?.includes('_') ||
            convertedBirthdate > today ||
            convertedBirthdate < pastLimit
        ) {
            throw new HttpException('invalid_birthdate', HttpStatus.BAD_REQUEST)
        }

        const user: User | undefined = await this.authService.onboard(request.user, data)

        if (!user) {
            throw new HttpException('user_not_found', HttpStatus.BAD_REQUEST)
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
    }
}
