import { Module, NestModule } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { User } from './user.entity'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [AuthService],
    controllers: [AuthController],
})
export class UserModule implements NestModule {
    configure(): void {}
}
