import { Request, Response } from "express";
import { Cliente } from "../entity/cliente";
import { AppDataSource } from "../data-source";


export class ClienteController{
    
    private clienteRepository = AppDataSource.getRepository(Cliente);

    async inserir (req: Request, res: any){

        const ClienteRequest = req.body;
        
        const novoCliente = new Cliente();
        novoCliente.matricula = ClienteRequest.matricula;
        novoCliente.nome = ClienteRequest.nome;
        novoCliente.telefone = ClienteRequest.telefone;
        novoCliente.liberado = ClienteRequest.liberado;

        const clienteSalvo = await this.clienteRepository.save(novoCliente);

        res.status(201).json(clienteSalvo);

    }
}