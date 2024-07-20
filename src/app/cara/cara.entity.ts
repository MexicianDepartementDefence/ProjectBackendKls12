import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { detail_tips } from "../detailcara/detailcara.entity";
import { Akun } from "../akun/akun.entity";

@Entity()
export class cara extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable : false})
    title: string;

    @OneToMany(() => detail_tips, (v) => v.cara, {onDelete: "CASCADE", cascade: ["insert", "update"]})
    detail : detail_tips[];

    @ManyToOne(() => Akun)
    @JoinColumn({name: "dibuat_oleh"})
    dibuat_oleh: Akun;
    @ManyToOne(() => Akun)
    @JoinColumn({name: "diperbarui_oleh"})
    diperbarui_oleh: Akun;
}