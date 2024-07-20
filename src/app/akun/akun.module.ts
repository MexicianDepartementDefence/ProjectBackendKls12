import { Module } from '@nestjs/common';
import { AkunController } from './akun.controller';
import { AkunService } from './akun.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Akun } from './akun.entity';
import { JwtModule } from '@nestjs/jwt';
import { JwtAccessTokenStrategy } from './jwtAccessToken.strategy';
import { JwtRefreshTokenStrategy } from './jwtRefreshtoken.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([Akun]), JwtModule.register({})],
  controllers: [AkunController],
  providers: [AkunService, JwtAccessTokenStrategy, JwtRefreshTokenStrategy]
})
export class AkunModule {}
