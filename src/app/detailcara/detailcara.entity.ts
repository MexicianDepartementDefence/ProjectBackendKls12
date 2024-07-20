import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { cara } from "../cara/cara.entity";

@Entity()
export class detail_tips extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    tips: string;

    @ManyToOne(() => cara, (v) => v.detail, {onDelete: "CASCADE"})
    @JoinColumn({name: "id_cara"})
    cara: cara;
}