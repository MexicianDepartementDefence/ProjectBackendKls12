import { PickType } from "@nestjs/mapped-types";
import { IsInt, IsNumber, IsObject, IsString } from "class-validator";

export class testimoniDto {
    @IsInt()
    id: number;

    @IsNumber()
    nama_akun :  number

    @IsString()
    isi_testimoni : string;
}


export class TambahTestimoni extends PickType (testimoniDto, ["nama_akun", "isi_testimoni"]) {}
