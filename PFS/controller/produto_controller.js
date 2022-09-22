const produtosPersistencia = require('../persistencia/produto_persistencia')
const listaProdutos = [{
    id: 1,
    nome: "PS4",
    preco: 4000
},
{
    id: 2,
    nome: "XBOX",
    preco: 1000 
}]

let idGerador = 3;

function geraId() {
return idGerador++
}

exports.listar = function(req, res){
    produtosPersistencia.listar((err, listaProdutosBD) => {
        if(err){
            res.status(500).json({erro:err});
        }
        else {
            res.json(listaProdutosBD);
        }
        
    });
    //res.json(listaProdutos)
    }


exports.buscarPorId = function(req, res){
    const id = +req.params.id;//o + transforma string em number
    for (const produto of listaProdutos) {
        if(produto.id == id){
            return res.json(produto);
        }
    }
    res.status(404).json({message :"Produto nao encontrado"})
    }


exports.inserir = function(req, res){
    let produto = req.body;
    produto.id = geraId()
    listaProdutos.push(produto);
    res.status(201).json(produto);
    }


exports.atualizar = function(req, res){
    const id = +req.params.id;
    let novoProduto = req.body;
    
    for (const produto of listaProdutos) {
        if(produto.id == id){
            
            if(novoProduto.nome)
                produto.nome = novoProduto.nome;
            if (novoProduto.preco)
                produto.preco = novoProduto.preco;
    
            return res.status(200).json(produto);
        }
    }
    
    res.status(404).json({message :"Produto nao encontrado"})
    
    }


exports.deletar = function(req, res){
    const id = +req.params.id;
    
    for (const produto of listaProdutos) {
        if(produto.id == id){
            let index = listaProdutos.indexOf(produto);
            listaProdutos.splice(index, 1);
            res.status(201).json({message :"Produto removido"})
        }
    }
    
    res.status(404).json({message :"Produto nao encontrado"})
    }
