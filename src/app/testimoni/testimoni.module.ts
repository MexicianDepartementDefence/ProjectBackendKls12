import { Module } from '@nestjs/common';
import { TestimoniController } from './testimoni.controller';
import { TestimoniService } from './testimoni.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Testimoni } from './testimoni.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Testimoni])],
  controllers: [TestimoniController],
  providers: [TestimoniService]
})
export class TestimoniModule {}
