import { Entity, PrimaryGeneratedColumn,  Column, BaseEntity } from "typeorm";

@Entity()
export class Usuario extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nome!: string;

    @Column()
    senha!: number;

}
