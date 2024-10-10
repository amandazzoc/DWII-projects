import { Sequelize } from "sequelize";

const configuration = new Sequelize({
  dialect: "mysql",
  username: "root",
  host: "localhost",
  password: "",
  // database: "livros",
  timezone: "-03:00"
})


export default configuration