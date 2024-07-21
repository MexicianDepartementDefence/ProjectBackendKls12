import { Body, Controller, Get, Post } from '@nestjs/common';
import { TestimoniService } from './testimoni.service';
import { TambahTestimoni } from './testimoni.dto';

@Controller('testimoni')
export class TestimoniController {
    constructor (private readonly servisTestimoni : TestimoniService) {}

    @Post("/create")
    async useCreate (@Body() payload: TambahTestimoni) {
        return this.servisTestimoni.create(payload)
    }

    @Get("/list")
    async useList () {
        return this.servisTestimoni.List()
    }
}
