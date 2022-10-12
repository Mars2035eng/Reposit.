const { Client } = require('pg')

const conexao = {
    user: 'postgres',
    host: '127.0.0.1',
    database: 'crud_produtos',
    password: 'postgres',
    port: '5432',
}


//OK
exports.listar = (callback) => {
    const client = new Client(conexao);
    client.connect();
    
    const sql = "SELECT * FROM PRODUTOS";

    client.query(sql, (err, res) => {
        if(err) {
            console.log("ERRO",err);
            callback(err, undefined);
        }
        else {
            console.log("RESULTADO",res.rows);
            callback(undefined, res.rows);
        }
        client.end()
    })
    console.log("Execução depois da query")
}

//OK
exports.buscarPorId = (id, callback) => {
    const client = new Client(conexao);
    client.connect();
    
    const sql = "SELECT * FROM produtos WHERE id=$1";
    const values = [id];

    client.query(sql, values, (err, result) => {
        if(err){
            console.log("ERRO", err);
            callback(err, undefined);
        }
        else {
            console.log("RESULTADO", result.rows[0]);
            callback(undefined, result.rows[0]);
        }
        client.end();
    })
}

//OK
exports.inserir = (produto, callback) =>{
    const client = new Client(conexao);
    client.connect();
    
    const sql = "INSERT INTO produtos (nome, preco) VALUES ($1, $2) RETURNING *";
    const values = [produto.nome, produto.preco];

    client.query(sql, values, (err, result) => {
        if(err){
            console.log("ERRO", err);
            callback(err, undefined);
        }
        else{
            console.log("PRODUTO INCLUIDO");
            callback(undefined, result.rows[0]);
        }
        client.end();
    })
}

//OK
exports.atualizar = (id, produto, callback) =>{
    const client = new Client(conexao);
    client.connect();
       
    const sql = "UPDATE produtos SET nome=$1, preco=$2 WHERE id=$3 RETURNING *"
    const values = [produto.nome, produto.preco, id]; 

    client.query(sql, values, (err, result) => {
        if(err){
            console.log("ERRO", err);
            callback(err, undefined);
        }
        else{
            console.log("PRODUTO ATUALIZADO");
            callback(undefined, result.rows[0]);
        }
        client.end();
    })
}

//OK
exports.deletar = (id, callback) => {
    const client = new Client(conexao);
    client.connect();
    
    const sql = "DELETE FROM produtos WHERE id=$1 RETURNING *";
    const values = [id];

    client.query(sql, values, (err, result) => {
        if(err){
            console.log("ERRO", err);
            callback(err, undefined);
        }
        else {
            console.log("RESULTADO", result.rows[0]);
            callback(undefined, result.rows[0]);
        }
        client.end();
    })
}
