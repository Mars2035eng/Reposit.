const express = require('express'); // importa o express
const app = express(); // cria uma variável chamada app que chama a função express


const produtoRota = require('./rotas/produto_rotas')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/produtos', produtoRota)


// faz com que o servidor seja executado na porta 3000 do seu localhost:3000
app.listen(3000, function(){
    console.log("Iniciando o servidor ...");
    }) 