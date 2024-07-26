import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import BaseResponse from 'utilis/response/base.response';
import { cara } from './cara.entity';
import { Repository } from 'typeorm';
import { REQUEST } from '@nestjs/core';
import { TambahCara, UpdateCara } from './cara.dto';
import { ResponseSuccess } from 'src/interface';

@Injectable()
export class CaraService extends BaseResponse {
    constructor(
        @InjectRepository(cara) private readonly caraServis: Repository<cara>,
        @Inject(REQUEST) private req:any
    ) {super()}

    async create (payload: TambahCara) : Promise<ResponseSuccess> {
        try {
            const tambah = await this.caraServis.save({...payload})

            return this.sukses("Berhasil Menambahkan Tips", tambah)
        } catch (error) {
            throw new HttpException("Gagal Menambahkan Tips Pembayaran", HttpStatus.UNPROCESSABLE_ENTITY)
        }
    }

    async list () {
        const find = await this.caraServis.find()

        if (!find) {
            throw new HttpException("Gagal Menampilkan Tips Pembayaran", HttpStatus.UNPROCESSABLE_ENTITY)
        }
       
        return this.sukses("Berhasil Menampilkan Cara", find);

        
    }

    async update (id: number, payload: UpdateCara) : Promise<ResponseSuccess> {
        const cari = await this.caraServis.findOne({
            where: {id: id}
        })

        if (!cari) {
            throw new HttpException("Gagal Memperbarui Tips", HttpStatus.UNPROCESSABLE_ENTITY)
        }

        const update = await this.caraServis.save({...payload, id: id})

        return this.sukses("Berhasil Memperbarui Tips", update)
    }
}
