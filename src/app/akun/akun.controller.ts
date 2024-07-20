import { Body, Controller, Post } from '@nestjs/common';
import { AkunService } from './akun.service';
import { LoginAkun, TambahAkun } from './akun.dto';

@Controller('akun')
export class AkunController {
    constructor(private readonly servisAkun : AkunService) {}

    @Post("/registerakun")
    async register (@Body() payload: TambahAkun) {
        return this.servisAkun.tambahkan(payload)
    }

    @Post("/login")
    async login (@Body() payload: LoginAkun) {
        return this.servisAkun.login(payload);
    }
}
