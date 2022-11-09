import { Entity, PrimaryGeneratedColumn,  Column, BaseEntity, ManyToOne } from "typeorm";
import { Autor } from './autor'

@Entity()
export class Livro extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    isbn!: number;

    @Column()
    nome!: string;

    @ManyToOne(() => Autor, (autor) => autor.livros)
    autor!: Autor;

    @Column()
    editora!: string;

    @Column()
    ano!: number;

    @Column()
    disponivel!: boolean;

}