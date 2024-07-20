import { Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CaraService } from './cara.service';
import { InjectCreatedBy } from 'utilis/decorator/inject-created_by.decorator';
import { TambahCara, UpdateCara } from './cara.dto';
import { JwtGuard } from '../akun/akun.guard';
import { InjectUpdatedBy } from 'utilis/decorator/inject-updated_by.decorator';

@UseGuards(JwtGuard)
@Controller('cara')
export class CaraController {
    constructor(private readonly caraServis: CaraService) {}

    @Post("/create")
    async cara(@InjectCreatedBy() payload: TambahCara) {
        return this.caraServis.create(payload)
    }

    @Get("/list")
    async list() {
        return this.caraServis.list()
    }

    @Put("/update/:id")
    async update (@InjectUpdatedBy() payload: UpdateCara, @Param('id') id: string) {
        return this.caraServis.update(+id, payload)
    }
}
