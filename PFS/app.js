const express = require('express'); // importa o express
const app = express(); // cria uma variável chamada app que chama a função express

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

//Obs.: representa uma função () =>, ou seja function(req, res) poderia ser (req, res) =>


//---------------- GET de produtos
app.get('/api/produtos', function(req, res){
    res.json(listaProdutos)
    //res.json([{"id":1, "nome": "PS4", "preco": 4000}]); //res.res("TESTE")
    })

//---------------- BUSCAR POR ID
app.get('/api/produtos/:id', function(req, res){
    const id = +req.params.id;//o + transforma string em number
    for (const produto of listaProdutos) {
        if(produto.id == id){
            res.json(produto);
        }
    }
    res.status(404).json({message :"Produto nao encontrado"})
})


//--------------- INSERIR
app.post('/api/produtos', function(req, res){
    // para ter o ID do produto deve pegar o maior id do array, então percorrer o array somar 1 no último
    
    const produto = listaProdutos[listaProdutos.length - 1];
    const last_id = produto.id;
    const id = last_id + 1;
    const{ nome } = req.body//problemas de linguagem!!!//{nome};// pq não usar "req.body;"?  que busca o nome na requisição
    const{ preco } = req.body//problemas de linguagem!!!//{preco};
    // o problema aqui é pegar das requisições os valores de nome e preço passados no request 
    
    listaProdutos.push(id, nome, preco); //coloca no array o novo produto
    
    res.status(201).json({message :"Produto inserido com sucesso"});
})

//--------------- ATUALIZAR
app.put('/api/produtos/:id', function(req, res){
    const id = +req.params.id;
    const{ novoNome } = req.body;//problemas de linguagem!!!
    const{ novoPreco } = req.body;//problemas de linguagem!!!
    // o problema aqui é pegar das requisições os valores de nome e preço passados no request

    for (const produto of listaProdutos) {
        if(produto.id == id){
            produto.nome = novoNome
            produto.preco = novoPreco
            res.json(listaProdutos);
        }
    }
   
    res.status(404).json({message :"Produto nao encontrado"})

})

//--------------- DELETAR
app.delete('/api/produtos/:id', function(req, res){
    const id = +req.params.id;


    for (const produto of listaProdutos) {
        if(produto.id == id){
            let index = listaProdutos.indexOf(produto); //problemas de linguagem!!!
            listaProdutos.splice(index, 1);
            res.json({message :"Produto removido"})
        }
    }

    res.status(404).json({message :"Produto nao encontrado"})
})










// faz com que o servidor seja executado na porta 3000 do seu localhost:3000
app.listen(3000, function(){
    console.log("Iniciando o servidor ...");
    }) 
