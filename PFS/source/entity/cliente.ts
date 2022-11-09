import { Entity, PrimaryGeneratedColumn,  Column, BaseEntity } from "typeorm";

@Entity()
export class Cliente extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;
    
    @Column()
    matricula!: number;

    @Column()
    nome!: string;

    @Column()
    telefone!: string;

    @Column()
    liberado!: boolean;
}
