import express from "express"
const app = express()
import FilmesController from "./controllers/FilmesController.js"
import connection from "./config/sequelize-config.js"

app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.urlencoded({extended:false}))

app.use("/", FilmesController)

connection.authenticate().then(()=>{
    console.log("Conexão com o banco de dados feita com sucesso!");
}).catch(err =>{
    console.log(err);
})

connection.query("CREATE DATABASE IF NOT EXISTS filmes;").then(() => {
    console.log("O banco de dados está criado!");
}).catch(err => {
    console.log(err);
})

const port = 8080

app.listen(port, (error) => {
    if(error) {
        console.log(`Erro ao iniciar o servidor ${error}`);
    }
})

