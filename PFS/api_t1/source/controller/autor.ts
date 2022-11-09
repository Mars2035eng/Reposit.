import { Request, Response } from "express";
import { Autor } from "../entity/autor";
import { AppDataSource } from "../data-source";


export class AutorController{

    private autorRepository = AppDataSource.getRepository(Autor);

    async inserir (req: Request, res: any){

        const AutorRequest = req.body;
        
        const novoAutor = new Autor();
        novoAutor.nome = AutorRequest.nome;
        novoAutor.pais = AutorRequest.pais;

        const autorSalvo = await this.autorRepository.save(novoAutor);

        res.status(201).json(autorSalvo);

    }
    
}