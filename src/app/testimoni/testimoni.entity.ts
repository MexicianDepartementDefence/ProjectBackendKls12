import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import BaseResponse from "utilis/response/base.response";
import { Akun } from "../akun/akun.entity";

@Entity()
export class Testimoni extends BaseResponse {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    nama: string;

    @Column({nullable : false})
    testimoni: string;
}