import { Entity, PrimaryGeneratedColumn,  Column, BaseEntity, OneToMany } from "typeorm";
import { Livro } from "./livro";

@Entity()
export class Autor extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;
    
    @Column()
    nome!: string;

    @Column()
    pais!: string;

    @OneToMany(() => Livro, (livro) => livro.autor)
    livros!: Livro[];

}

