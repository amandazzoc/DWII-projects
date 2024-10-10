import express from "express";
import configuration from "./config/sequelize-config.js";
import LivrosController from "./controllers/LivrosController.js"
const app = express()

configuration.authenticate().then(() =>{
  console.log(`Configuração do banco de dados feito com sucesso`);
}).catch((err) => {
  console.log(`Falha ao se conectar com o banco ${err}`);
})

configuration.query("CREATE DATABASE IF NOT EXISTS livros;").then(()=> {
  console.log("Banco criado com sucesso");
}).catch(err => {
  console.log("Erro ao criar o banco" + err);
})

app.use("/", LivrosController)

const port = 8080

app.listen(port, (err) => {
  if(err){
    console.log(`Erro ao iniciar o servidor`);
  }
})