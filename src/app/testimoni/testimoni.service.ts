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
                ...payload
            })


            return this.sukses("Berhasil Menambahkan Testimoni", tambah)
        } catch (error) {
            throw new HttpException("Berhasil Menambahkan Testimoni", HttpStatus.UNPROCESSABLE_ENTITY)
        }
    }

    async List () {
       const hasil = await this.testimoniRepo.find();

       if (!hasil) {
throw new HttpException("Gagal Menampilkan Testimoni", HttpStatus.UNPROCESSABLE_ENTITY)
       }
        return this.sukses("OK", hasil)
    }
}
