import "reflect-metadata";
import { DataSource } from "typeorm";
import { Autor } from "./entity/autor"
import { Cliente } from "./entity/cliente";
import { Livro } from "./entity/livro";
import { Locacao } from "./entity/locacao";
import { Usuario } from "./entity/usuario";


export const AppDataSource = new DataSource ({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres", //ou a senha do postgres 88...
    database: "pfs_biblioteca",
    synchronize: true,
    logging: true,
    entities: [Autor, Cliente, Livro, Locacao, Usuario],
    subscribers: [],
    migrations: [],

})