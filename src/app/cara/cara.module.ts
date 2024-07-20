import { Module } from '@nestjs/common';
import { CaraController } from './cara.controller';
import { CaraService } from './cara.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { cara } from './cara.entity';

@Module({
  imports: [TypeOrmModule.forFeature([cara])],
  controllers: [CaraController],
  providers: [CaraService]
})
export class CaraModule {}
