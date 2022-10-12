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

//OK
exports.listar = function(req, res){
    produtosPersistencia.listar((err, listaProdutosBD) => {
        if(err){
            return res.status(500).json({erro:err});
        }
        else {
            return res.json(listaProdutosBD);
        }
        
    });
}

//OK
exports.buscarPorId = function(req, res){
    const id = req.params.id;
    produtosPersistencia.buscarPorId(id, (err, produto) => {
        if(err){
            return res.status(500).json({erro:err});
        }
        else{
            if(produto)
                return res.json(produto);
            else{
                return res.status(404).json({erro:"Produto nao encontrado"});
            }
        }
    });
}

//OK
exports.inserir = function(req, res){
    const produto = req.body;
    produtosPersistencia.inserir(produto, (err, produtoInserido) => {
        if(err){
            return res.status(500).json({erro:err});
        }
        else{
            return res.status(201).json(produtoInserido);
        }
    });
}


//OK
exports.atualizar = function(req, res){
    const produto = req.body;
    const id = req.params.id;
    produtosPersistencia.atualizar(id, produto, (err, produtoAtualizado) => {
        if(err){
            return res.status(500).json({erro:err});
        }
        else{
            if(produtoAtualizado)
                return res.json(produtoAtualizado);
            else{
                return res.status(404).json({erro:"Produto nao encontrado"});
            }
        }
    });
}
   
//OK
exports.deletar = function(req, res){
    const id = req.params.id;
    produtosPersistencia.deletar(id, (err, produtoDeletado) => {
        if(err){
            return res.status(500).json({erro:err});
        }
        else{
            if(produtoDeletado)
                return res.json(produtoDeletado);
            else{
                return res.status(404).json({erro:"Produto nao encontrado"});
            }
        }
    });
}
    
