import { Entity, PrimaryGeneratedColumn,  Column, BaseEntity, OneToMany, ManyToOne } from "typeorm";
import { Cliente } from "./cliente";
import { Livro } from "./livro";
import { Usuario } from "./usuario";


@Entity()
export class Locacao extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Usuario, (usuario) => usuario.id)
    usuario!: Usuario;

    @ManyToOne(() => Cliente, (cliente) => cliente.id)
    cliente!: Cliente;

    @ManyToOne(() => Livro, (livro) => livro.id)
    livro!: Livro;

    @Column()
    data_saida!: number;

    @Column()
    data_retorno!: number;

    //Colocar um OneToMany com LOCACAO em USUARIO, CLIENTE e LIVRO?
}