import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import BaseResponse from 'utilis/response/base.response';
import { Testimoni } from './testimoni.entity';
import { Repository } from 'typeorm';
import { TambahAkun } from '../akun/akun.dto';
import { ResponseSuccess } from 'src/interface';
import { TambahTestimoni } from './testimoni.dto';

@Injectable()
export class TestimoniService extends BaseResponse {
    constructor(
        @InjectRepository(Testimoni) private readonly testimoniRepo : Repository<Testimoni>
    ) {super()}

    async create (payload: TambahTestimoni) : Promise<ResponseSuccess> {
        try {

            const tambah = await this.testimoniRepo.save({
                ...payload,
                nama_akun: {
                    id: payload.nama_akun
                }
            })


            return this.sukses("Berhasil Menambahkan Testimoni", tambah)
        } catch (error) {
            throw new HttpException("Berhasil Menambahkan Testimoni", HttpStatus.UNPROCESSABLE_ENTITY)
        }
    }

    async List () {
        const BangunQuery = await this.testimoniRepo.createQueryBuilder("testimoni")

        BangunQuery.leftJoin(`testimoni.nama_akun`, 'nama_akun').select(["nama_akun.nama_lengkap", "nama_akun.email", "testimoni.isi_testimoni"])

        const hasil = await BangunQuery.getMany()
        return this.sukses("OK", hasil)
    }
}
