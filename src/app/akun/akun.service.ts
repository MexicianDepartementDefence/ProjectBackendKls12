import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import BaseResponse from 'utilis/response/base.response';
import { Akun } from './akun.entity';
import { Repository } from 'typeorm';
import { ResponseSuccess } from 'src/interface';
import { LoginAkun, TambahAkun } from './akun.dto';
import { compare, hash } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { jwt_config } from 'src/config/jwt.config';


@Injectable()
export class AkunService extends BaseResponse {
    constructor(
        @InjectRepository(Akun) private readonly servisAkun : Repository<Akun>,
        private jwtService: JwtService
    ) {super()}

    generateJwt(payload: Payloadjwt, exipresIn: string | number, token: string) {
        return this.jwtService.sign(payload, {
            secret: token,
            expiresIn: exipresIn
        })
    }

    async tambahkan (payload: TambahAkun) : Promise<ResponseSuccess> {

    const cariEmail = await this.servisAkun.findOne({
    where: {
        email: payload.email
    }
    })   

    if (cariEmail) {
        throw new HttpException("Email Sudah Terdaftar", HttpStatus.FOUND)
    }

    payload.password = await hash(payload.password, 12);

    await this.servisAkun.save(payload);

    return this.sukses("Register Berhasil", payload)
    }


    async login (payload: LoginAkun) : Promise<ResponseSuccess> {
    const cariEmail = await this.servisAkun.findOne({
        where: {email: payload.email},
        select: {
            id: true,
            nama_lengkap: true,
            email: true,
            password: true,
            role: true,
            refresh_token: true
        }
    })

    const gabung = await compare(payload.password, cariEmail.password)

    if (!cariEmail) {
        throw new HttpException("Akun Tidak Ditemukan", HttpStatus.NOT_FOUND)
    }



    if (gabung) {

        const jwt : Payloadjwt = {
            id : cariEmail.id,
            nama_lengkap: cariEmail.nama_lengkap,
            email: cariEmail.email
        }

        const access_token = await this.generateJwt(
            jwt,
            '1d',
            jwt_config.access_token_secret
        )

        const refresh_token = await this.generateJwt(
            jwt,
            '7d',
            jwt_config.refresh_token_secret
        )

        await this.servisAkun.update(
            cariEmail.id,
            {
            refresh_token: refresh_token,
        })

        return this.sukses("OK", {...cariEmail, access_token: access_token, refresh_token: refresh_token})
    } else {
        throw new HttpException("Email Dan Password Tidak Sama", HttpStatus.UNPROCESSABLE_ENTITY)
    }
    
    
    }
}
