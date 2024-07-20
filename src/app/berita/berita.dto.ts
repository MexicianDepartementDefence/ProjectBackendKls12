import { PickType } from "@nestjs/mapped-types";
import { IsInt, IsString } from "class-validator";

export class BeritaDto {
    @IsInt()
    id: number;

    @IsString()
    judul: string;

    @IsString()
    isi_berita: string;
}

export class TambahBerita extends PickType(BeritaDto, ["judul","isi_berita"]) {}

export class UpdateBerita extends PickType(BeritaDto, ["judul", "isi_berita"]) {}