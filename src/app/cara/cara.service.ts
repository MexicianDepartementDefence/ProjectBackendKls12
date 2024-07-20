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

            return this.sukses("Berhasil Menambahkan Tips", this.req.user.user_id)
        } catch (error) {
            throw new HttpException("Gagal Menambahkan Tips Pembayaran", HttpStatus.UNPROCESSABLE_ENTITY)
        }
    }

    async list () {
        const bangunQuery = await this.caraServis.createQueryBuilder('cara');

        bangunQuery
        .leftJoin('cara.detail', 'detail')  // Join the detail table
        .leftJoin('cara.dibuat_oleh', 'dibuat_oleh')
        .leftJoin('cara.diperbarui_oleh', 'diperbarui_oleh')  // Join the dibuat_oleh table
        .select([
            "cara.title",
            "detail.tips",
            "dibuat_oleh.nama_lengkap",
            'diperbarui_oleh.nama_lengkap'
        ]);

        const hasil = await bangunQuery.getMany()
        return this.sukses("Berhasil Menampilkan Cara", hasil)
    }

    async update (id: number, payload: UpdateCara) : Promise<ResponseSuccess> {
        const cari = await this.caraServis.findOne({
            where: {id: id}
        })

        if (!cari) {
            throw new HttpException("Gagal Memperbarui Tips", HttpStatus.UNPROCESSABLE_ENTITY)
        }

        const update = await this.caraServis.save({...payload, id: id})

        return this.sukses("Berhasil Memperbarui Tips", this.req.user.user_id)
    }
}
