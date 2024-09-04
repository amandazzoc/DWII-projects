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
// :nome? É UM PARÂMETRO OPCIONAL
app.get("/perfil/:nome?", function(req, res){
    //coletando o parâmetro e guardando na variável
    const nome = req.params.nome
    // verificando se o nome parâmetro existe
    if(nome){
        res.send(`<h1>Olá, ${nome}!</h1>`)
    } else {
        res.send(`<h2>Faça login para acessar o seu perfil</h2>`)
    }
})

// ROTA DE VÍDEOS
// :playlist? e :video? - parâmetros opcionais
app.get("/videos/:playlist?/:video?", (req, res) => {
    const playlist = req.params.playlist
    const video = req.params.video
    if(playlist && video == undefined){ // Playlist true e video não definido
        res.send(`<h1>Você está na playlist ${playlist}</h1>`)
    }
    if(playlist && video){ // Playlist e video true
        res.send(`<h1>Você está na playlist ${playlist}</h1><br>Reproduzindo o vídeo ${video}...`)
    }else{ // Não for informado nenhum parâmetro
        res.send(`<h1>Página de vídeos</h1>`)
    }
})

// Iniciando o servidor na porta 8080
app.listen(8080, error => {
    if(error){
        console.log(`Ocorreu um erro: ${error}`);
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
});

