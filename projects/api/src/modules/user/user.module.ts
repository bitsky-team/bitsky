import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './user.entity';
import { AuthController } from './auth.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [],
  controllers: [AuthController],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {}
}
