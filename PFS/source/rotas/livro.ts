import { Router } from 'express';
import { LivroController } from '../controller/livro';

const rota = Router();
const controller = new LivroController();

//Rota: "/api/produtos" vem do app.ts da api da aula. Necessário fazer com que dependa da entrada:
//  /api/autor
//  /api/cliente
//  /api/livro
//  /api/locacao
//  /api/usuario

//rota.get('/', controller.listar);
//rota.get('/', controller.listar_nome);
//rota.get('/', controller.listar_id);
//rota.post('/', controller.inserir);
//rota.put('/', controller.atualizar);
//rota.delete('/', controller.deletar);