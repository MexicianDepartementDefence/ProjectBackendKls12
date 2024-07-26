import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Akun } from "../akun/akun.entity";

@Entity()
export class cara extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable : false})
    gambar: string;

    @Column({nullable: false})
    tips: string;
}