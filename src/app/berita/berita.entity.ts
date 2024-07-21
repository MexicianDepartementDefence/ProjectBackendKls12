import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Berita extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    gambar: string;

    @Column({nullable: false})
    judul: string;

    @Column({nullable: false})
    isi_berita: string;
}