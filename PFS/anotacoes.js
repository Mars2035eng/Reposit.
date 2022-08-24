/*comentário em bloco*///comentário em linha
//Tipos básicos de variáveis
let nome = "Fulano";//string
let idade = 20; //numeber
let teste = true; //boleano

let nomeProduto = "PS4"
let precoProduto = 4000

//uma forma de criar objeto
let produto = new Object();
produto.nome = "PS4";
produto.preco = 4000;

/*//outra forma de criar o objeto
let produto = {
        nome: "PS4",
        preco: 4000}*/

/*//outra forma
let produto = {    
    nome: nomeProduto,
    preco: precoProduto}*/

//arraysconst listaProdutos = []
//listaProdutos [0] = produto;listaProdutos.push(produto);
listaProdutos.push({        nome: "Xbox",        preco: 2500    })

//laço for...offor(let produto of listaProdutos){    console.log(produto.nome);}
//laço forEachlistaProdutos.forEach(printNome);
function printNome(produto){    if(produto && produto.nome){        console.log (produto.nome)    }}

console.log(produto)console.log(listaProdutos)




/*
listar -GET
inserir - POST
deletar - DELETE
atualizar - PUT
buscarPorId - GET

localhost:3000/api/produtos
obs.: os produtos são o recurso


JSON - padrão de informação de response. [{"id":1, "nome": "PS4", "preco": 4000}, {outro array de informação}, ....]
XML - padrão de informação de response

LISTAR:
REQUEST  ->  GET  em /produtos
RESPONSE ->  body: json , content-type: application/json

INSERIR:
REQUEST  ->  POST em /produtos  -> body: json , content-type: application/json
RESPONSE ->  pode ser mensagem "Inserido com sucesso" com ou sem o os dados do JSON, com status response 201 (created)


BUSCAR POR ID:
REQUEST  ->  GET  em /produtos/:Id (:Id é um parâmetro de Id)
RESPONSE ->  body: json , content-type: application/json

caso a busca falhe: status response 404
caso a busca seja com parâtros errados: status response 400 (badrequest)


FERRAMENTAS DE TESTE QUE SIMULAM O REQUEST:
POSTMAN
INSOMNIA
THUNDERCLIENT


*/
