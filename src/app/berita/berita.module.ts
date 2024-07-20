import { Module } from '@nestjs/common';
import { BeritaController } from './berita.controller';
import { BeritaService } from './berita.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Berita } from './berita.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Berita])],
  controllers: [BeritaController],
  providers: [BeritaService]
})
export class BeritaModule {}
