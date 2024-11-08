import express from "express";
import Produto from "../models/Produto.js";
const router = express.Router();
import Auth from "../middleware/Auth.js";

router.get("/produtos", Auth, function (req, res) {
  Produto.findAll().then((produtos) => {
    res.render("produtos", {
      produtos: produtos,
    });
  });
});


router.post("/produtos/new", Auth, (req, res) => {
  // RECEBENDO OS DADOS DO FORMULÁRIO E GRAVANDO NAS VARIÁVEIS
  const nome = req.body.nome;
  const preco = req.body.preco;
  const categoria = req.body.categoria;
  Produto.create({
    nome: nome,
    preco: preco,
    categoria: categoria,
  }).then(() => {
    res.redirect("/produtos");
  });
});

// ROTA DE EXCLUSÃO
router.get("/produtos/delete/:id", Auth, (req, res) => {
  // COLETAR ID QUE VEIO DA URL
  const id = req.params.id;
  // MÉTODO PARA EXCLUIR
  Produto.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/produtos");
    })
    .catch((error) => {
      console.log(error);
    });
});

// ROTA DE EDIÇÃO DE PRODUTO
router.get("/produtos/edit/:id", (req, res) => {
  const id = req.params.id
  Produto.findByPk(id).then((produto) => {
    res.render("produtoEdit", {
      produto:produto
    })
  })
})

// ROTA DE ALTERAÇÂO DO PRODUTO
router.post("/produtos/update", (req, res) => {
  const id = req.body.id
  const nome = req.body.nome
  const preco = req.body.preco
  const categoria = req.body.categoria
  Produto.update(
    {
      nome: nome,
      preco: preco,
      categoria: categoria
    },
    {
      where: {
        id:id
      }
    }
  ).then(() => {
    res.redirect("/produtos")
  }).catch((error) => {
    console.log("Erro ao editar os dados: " + error);
  })
})
export default router;
