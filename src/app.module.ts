import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { AkunModule } from './app/akun/akun.module';
import { CaraModule } from './app/cara/cara.module';
import { BeritaModule } from './app/berita/berita.module';

import { TestimoniModule } from './app/testimoni/testimoni.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), AkunModule, CaraModule, BeritaModule, TestimoniModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
