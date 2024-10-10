import Sequelize from "sequelize";
import configuration from "../config/sequelize-config";

const Livro = configuration.define("Livros", {
  titulo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  paginas: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  ano: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});
Livro.sync({force: false})

export default Livro