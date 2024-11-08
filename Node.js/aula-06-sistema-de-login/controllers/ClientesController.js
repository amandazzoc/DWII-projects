import express from "express";
import Cliente from "../models/Cliente.js";
const router = express.Router();
import Auth from "../middleware/Auth.js";

// ROTA CLIENTES
router.get("/clientes", Auth, function (req, res) {
  Cliente.findAll().then((clientes) => {
    res.render("clientes", {
      clientes: clientes,
    });
  });
});

// ROTA DE CADASTRO DE CLIENTE

router.post("/clientes/new", Auth, (req, res) => {
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
router.get("/clientes/delete/:id", Auth, (req, res) => {
  // COLETAR ID QUE VEIO DA URL
  const id = req.params.id;
  // MÉTODO PARA EXCLUIR
  Cliente.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log(error);
    });
});

// ROTA DE EDIÇÂO DE CLIENTE
router.get("/clientes/edit/:id", Auth, (req, res) => {
  const id = req.params.id
  Cliente.findByPk(id).then((cliente) => {
    res.render("clienteEdit", {
      cliente: cliente
    })
  })
})

// ROTA DE ALTERAÇÃO DE CLIENTE
router.post("/clientes/update", (req, res) => {
  const id = req.body.id
  const nome = req.body.nome
  const cpf = req.body.cpf
  const endereco = req.body.endereco
  Cliente.update(
    {
      nome: nome,
      cpf: cpf,
      endereco: endereco
    },
    {
      where: {
        id:id
      }
    }
  ).then(() => {
    res.redirect("/clientes")
  }).catch((error) => {
    console.log("Erro ao editar os dados: " + error)
  })
})
export default router;
