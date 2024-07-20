import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Akun extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    nama_lengkap: string;

    @Column({unique: true, nullable: false})
    email: string;

    @Column({nullable: false})
    password: string;

    @Column({nullable: true})
    refresh_token: string;

    @Column({nullable: true})
    role: string;

    @Column({type: "datetime", default: () => "CURRENT_TIMESTAMP"})
    dibuat_pada: Date;

    @Column({type: "datetime", default: () => "CURRENT_TIMESTAMP"})
    diperbarui_pada: Date;
}