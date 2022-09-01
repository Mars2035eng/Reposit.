const express = require('express'); // importa o express
const app = express(); // cria uma variável chamada app que chama a função express

//Linhas para manipular os json recebidos
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


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
            return res.json(produto);
        }
    }
    res.status(404).json({message :"Produto nao encontrado"})
})


//--------------- INSERIR
app.post('/api/produtos', function(req, res){
    let produto = req.body;
    produto.id = geraId()
    listaProdutos.push(produto);
    res.status(201).json(produto);
})

//--------------- ATUALIZAR
app.put('/api/produtos/:id', function(req, res){
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

    /*//usando FIND
    let produto = listaProdutos.find( (produto) => {
        return produto.id == id;
    });
    if (produto) {
        produto.nome = novoProduto.nome;
        produto.preco = novoProduto.preco;
        res.json(produto);
    }
    else{
        res.status(404).json({msg:"Produto nao encontrado"})
    }
    //fim do usando FIND*/




    res.status(404).json({message :"Produto nao encontrado"})

})

//--------------- DELETAR
app.delete('/api/produtos/:id', function(req, res){
    const id = +req.params.id;

    for (const produto of listaProdutos) {
        if(produto.id == id){
            let index = listaProdutos.indexOf(produto);
            listaProdutos.splice(index, 1);
            res.status(201).json({message :"Produto removido"})
        }
    }

    res.status(404).json({message :"Produto nao encontrado"})
})





// faz com que o servidor seja executado na porta 3000 do seu localhost:3000
app.listen(3000, function(){
    console.log("Iniciando o servidor ...");
    })
