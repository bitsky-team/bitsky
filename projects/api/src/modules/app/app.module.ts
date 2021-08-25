import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Config } from '.././../config'

import { UserModule } from '../user/user.module'

const modules = [UserModule]

@Module({
    imports: [...modules, TypeOrmModule.forRoot(Config.getInstance().typeOrmConfig)],
    controllers: [],
    providers: [],
})
export class AppModule {}
