import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { validate } from 'config/env.validate';
import { ApiModule } from './Api/api.module';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    RedisModule,
    ConfigModule.forRoot({ isGlobal: true, validate }),
    ApiModule,
  ],
})
export class AppModule {}
