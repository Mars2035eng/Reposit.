import express from "express";
//import rotaCliente ....
import { AppDataSource } from "./data-source";
import "reflect-metadata";

AppDataSource.initialize().then(); {

}

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use('/api/biblioteca', rotaCleinte ...)  --- LINCAR COM A IMPORTAÇÃO DE CADA ROTA


// faz com que o servidor seja executado na porta 3000 do seu localhost:3000
app.listen(PORT, function(){
    console.log("Iniciando o servidor ...");
    })

