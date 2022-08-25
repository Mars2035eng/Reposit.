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


//GET de produtos
app.get('/api/produtos', function(req, res){
    res.json(listaProdutos)
    //res.json([{"id":1, "nome": "PS4", "preco": 4000}]); //res.res("TESTE")
    })

//BUSCAR POR ID
app.get('/api/produtos/:id', function(req, res){
    const id = +req.params.id;//o + transforma string em number
    for (const produto of listaProdutos) {
        if(produto.id == id){
            res.json(produto);
        }
    }
    res.status(404).json({"msg":"Produto n encontrado"})
})

//aqui tem que percorrer o array listaProdutos até achar o id e retornar o produto


// faz com que o servidor seja executado na porta 3000 do seu localhost:3000
app.listen(3000, function(){
    console.log("Iniciando o servidor ...");
    }) 
