import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import BaseResponse from 'utilis/response/base.response';
import { Berita } from './berita.entity';
import { Repository } from 'typeorm';
import { TambahBerita } from './berita.dto';
import { ResponseSuccess } from 'src/interface';

@Injectable()
export class BeritaService extends BaseResponse {
    constructor(
        @InjectRepository(Berita) private readonly repoBerita : Repository<Berita>
    ) {super()}

    async create (payload: TambahBerita) : Promise<ResponseSuccess> {
        try {
            const tambah = await this.repoBerita.save(payload)

            return this.sukses("Berhasil Menambahkan Berita", tambah)
        } catch (error) {
           throw new HttpException("Gagal Menambahkan Berita", HttpStatus.UNPROCESSABLE_ENTITY) 
        }
    }

    async List () {
        const BangunQuery = await this.repoBerita.createQueryBuilder("berita");

        const result = await BangunQuery.getMany();
        return this.sukses("Berhasil Menampilkan Berita", result)
    }
}
