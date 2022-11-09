import { Request, Response } from "express";
import { Livro } from "../entity/livro";
import { AppDataSource } from "../data-source";
import { ILike, Like } from "typeorm";


export class LivroController{
 
    private livroRepository = AppDataSource.getRepository(Livro);
    
    async inserir (req: Request, res: any){
    
        const LivroRequest = req.body;
            
        const novoLivro = new Livro();
        novoLivro.isbn = LivroRequest.isbn;
        novoLivro.nome = LivroRequest.nome;
        novoLivro.autor = LivroRequest.autor;//como fazer o link com a tabela de autores? como será passado o json?
        novoLivro.editora = LivroRequest.editora;
        novoLivro.ano = LivroRequest.ano;

    
        const livroSalvo = await this.livroRepository.save(novoLivro);
    
        res.status(201).json(livroSalvo);
    
    }

    async buscarLivroDisponivel (req: any, res: any){

        const listaLivroDisp = await this.livroRepository.find({
            where: {
                disponivel: true,
            },
        });

        res.status(201).json(listaLivroDisp);
    }

    async buscarLivroNome (req: any, res: any){

        const nomeProcurado = req.params.nome;

        const livro = await this.livroRepository.findBy({
                nome: ILike(nomeProcurado),
        })

        res.status(201).json(livro);
    }
        
}
