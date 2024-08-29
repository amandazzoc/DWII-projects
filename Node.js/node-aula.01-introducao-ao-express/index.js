// Importando o Express na aplicação
const express = require("express") // CommomJS Modules
// Criando uma instância do Express
const app = express()

// CRIANDO A ROTA PRINCIPAL
app.get("/", function(req, res){
    res.send("<h1>Hello World! Bem-vindo!</h1><br><hr>")
})

// ROTA DE PERFIL
// :nome É UM PARÂMETRO OBRIGATÓRIO
app.get("/perfil/:nome", function(req, res){
    const nome = req.params.nome
    res.send(`<h1>Olá, ${nome}!</h1>`)
})

// ROTA DE VÍDEOS
app.get("/videos", (req, res) => {
    res.send("<h1>Página de vídeos</h1>")
})


// Iniciando o servidor na porta 8080
app.listen(8080, error => {
    if(error){
        console.log(`Ocorreu um erro: ${error}`);
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
});

