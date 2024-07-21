import { PickType } from "@nestjs/mapped-types";
import { IsInt, IsString } from "class-validator";

export class BeritaDto {
    @IsInt()
    id: number;

    @IsString()
    gambar: string;

    @IsString()
    judul: string;

    @IsString()
    isi_berita: string;

    @IsString()
    tanggal_rilis: string;
}

export class TambahBerita extends PickType(BeritaDto, ["judul","isi_berita", "gambar", "tanggal_rilis"]) {}

export class UpdateBerita extends PickType(BeritaDto, ["judul", "isi_berita", "gambar", "tanggal_rilis"]) {}