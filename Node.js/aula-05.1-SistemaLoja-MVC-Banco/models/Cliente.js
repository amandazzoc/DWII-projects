import Sequelize from "sequelize";

// Configuração do Sequelize
import connection from "../config/sequelize-config.js";

// .define cria a tabela no banco
const Cliente = connection.define("clientes", {
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  endereco: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
Cliente.sync({ force: false }); // Para não forçar a criação caso a tabela já exista
export default Cliente;
