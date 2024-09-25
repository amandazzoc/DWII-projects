// Importando o Express na aplicação
import express from 'express';
// Criando uma instância do Express
const app = express();

//Importando os controllers
import ClientesController from './controllers/ClientesController.js';

app.use(express.static("public"));

app.set("view engine", "ejs");

// Definindo o uso das rotas que estao nos Controllers
app.use("/", ClientesController)

// CRIANDO A ROTA PRINCIPAL
app.get("/", function (req, res) {
  res.render("index"); // Render é usado para renderizar a página
});

// Iniciando o servidor na porta 8080
app.listen(8080, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});
