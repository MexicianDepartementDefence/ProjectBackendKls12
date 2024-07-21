import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import BaseResponse from "utilis/response/base.response";
import { Akun } from "../akun/akun.entity";

@Entity()
export class Testimoni extends BaseResponse {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Akun)
    @JoinColumn({name: "nama_akun"})
    nama_akun : Akun

    @Column({nullable : false})
    isi_testimoni: string;
}