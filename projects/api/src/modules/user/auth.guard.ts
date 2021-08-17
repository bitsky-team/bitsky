import {
    CanActivate,
    ExecutionContext,
    HttpException,
    HttpStatus,
    Injectable,
} from '@nestjs/common'
import { verify, JwtPayload } from 'jsonwebtoken'
import { Config } from '../../config'

@Injectable()
export class AuthGuard implements CanActivate {
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest()
        request.user = this.validateToken(request.headers.authorization)
        return true
    }

    validateToken(auth: string): string | JwtPayload {
        const authParts = auth?.split(' ') ?? []

        if (!authParts.length || authParts[0] !== 'Bearer') {
            this.invalidTokenError()
        }

        const token = authParts[1]

        try {
            const secret = Config.getInstance().get('SECRET')
            return verify(token, secret)
        } catch (err) {
            this.invalidTokenError()
        }
    }

    invalidTokenError(): void {
        throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED)
    }
}
