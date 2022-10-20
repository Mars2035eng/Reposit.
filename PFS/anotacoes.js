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

/*
COMO INSTALAR EXPRESS

1) aplicar comando abaixo no terminal no bash
    $ npm init -y

2) aplicar comando abaixo no terminal no bash
    $ npm install express


3) alterar no arquivo package.json que foi criado
      "scripts": {
    "start": "node app.js"
  },


PARA RODAR O ARQUIVO
no terminal

node 'nome do arquivo'.js
no caso: node app.js

ARTIGO
https://blog.geekhunter.com.br/criar-crud-nodejs/

*/


/*------------------       ANOTACOES  -------------------------------------------------------------------------

--FORMA DE COLCOAR DADOS NO POSTMAN:
{
        "nome": "Nintendo",
        "preco": 10
}


--Obs.: representa uma função () =>, ou seja function(req, res) poderia ser (req, res) =>


--INSTALAÇÃO NODEDEMON
no terminla
npm install -g nodemon // para salvar na máquina
npm install --save-dev nodemon // para salvar no projeto

alterar no package.json:
    "start": "nodemon app.js"
    
e para rodar o servidor: nodemon app.js
*/

/*

PARA ISNTALAR A BIBLIOTECA NODE POSTGRE
--npm install pg


REPOSITÓRIO GIT DO PROFESSOR
https://github.com/profries/psf_2022_2_api_crud_produtos_memoria


PARA INSTALAR A BIBLIOTECA TYPESCRIPT
npm install --save-dev typescript


LITA DE INSTALAÇÕES
npm install
npm install express
npm install --save-dev nodemon
npm install --save-dev typescript
npm install @types/express
npm install @types/node


TypeORM
npm install typeorm --save
npm install reflect-metadata --save
npm install @types/node --save-dev
npm install pg --save




CONFIGURAÇÕES NO package.json

                        {
                          "name": "api",
                          "version": "1.0.0",
                          "description": "Projeto",
                          "main": "app.js",
                          "scripts": {
                            "init": "tsc --init",
                            "test": "echo \"Error: no test specified\" && exit 1",
                            "start": "tsc && node dist/app.js"
                          },
                          "keywords": [],
                          "author": "",
                          "license": "ISC",
                          "dependencies": {
                            "@types/express": "^4.17.14",
                            "@types/node": "^18.11.2",
                            "express": "^4.18.2"
                          },
                          "devDependencies": {
                            "nodemon": "^2.0.20",
                            "typescript": "^4.8.4"
                          }
                        }


CONFIGURAÇÕES NO tsconfig.json


*/
