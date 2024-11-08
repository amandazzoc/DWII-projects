import { Sequelize } from "sequelize";

// Criando conexão com o banco de dados
const connection = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'galeria', // INICIA O PROJETO COM A LINHA COMENTADA
    timezone: '-03:00'
})

export default connection;