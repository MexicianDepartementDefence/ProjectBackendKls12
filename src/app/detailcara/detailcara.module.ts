import { Module } from '@nestjs/common';
import { DetailcaraController } from './detailcara.controller';
import { DetailcaraService } from './detailcara.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { detail_tips } from './detailcara.entity';

@Module({
  imports: [TypeOrmModule.forFeature([detail_tips])],
  controllers: [DetailcaraController],
  providers: [DetailcaraService]
})
export class DetailcaraModule {}
