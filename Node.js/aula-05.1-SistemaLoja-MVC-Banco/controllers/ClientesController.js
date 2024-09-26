import express from "express";
import Cliente from "../models/Cliente.js";
const router = express.Router();

// ROTA CLIENTES
router.get("/clientes", function (req, res) {
  Cliente.findAll().then((clientes) => {
    res.render("clientes", {
      clientes: clientes,
    });
  });
});




// ROTA DE CADASTRO DE CLIENTE

router.post("/clientes/new", (req, res) => {
  // RECEBENDO OS DADOS DO FORMULÁRIO E GRAVANDO NAS VARIÁVEIS
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
  Cliente.create({
    nome: nome,
    cpf: cpf,
    endereco: endereco,
  }).then(() => {
    res.redirect("/clientes");
  });
});

// ROTA DE EXCLUSÃO
router.get("/clientes/delete/:id", (req, res) => {
    // COLETAR ID QUE VEIO DA URL
    const id = req.params.id
    // MÉTODO PARA EXCLUIR
    Cliente.destroy({
        where:{
            id: id
        }
    }).then(() => {
        res.redirect("/clientes");
    }).catch((error) => {
        console.log(error);
    })
})
export default router;
