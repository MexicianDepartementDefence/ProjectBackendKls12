import { Body, Controller, Get, Post } from '@nestjs/common';
import { BeritaService } from './berita.service';
import { TambahBerita } from './berita.dto';

@Controller('berita')
export class BeritaController {
    constructor(private readonly servisBerita : BeritaService) {}

    @Post("/create")
    async useCreate (@Body() payload: TambahBerita) {
        return this.servisBerita.create(payload)
    }

    @Get("/list")
    async useList () {
        return this.servisBerita.List()
    }
}
