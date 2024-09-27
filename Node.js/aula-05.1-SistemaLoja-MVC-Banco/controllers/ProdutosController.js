import express from "express";
import Produto from "../models/Produto.js";
const router = express.Router();

router.get("/produtos", function (req, res) {
  Produto.findAll().then((produtos) => {
    res.render("produtos", {
      produtos: produtos,
    });
  });
});


router.post("/produtos/new", (req, res) => {
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
router.get("/produtos/delete/:id", (req, res) => {
    // COLETAR ID QUE VEIO DA URL
    const id = req.params.id
    // MÉTODO PARA EXCLUIR
    Produto.destroy({
        where:{
            id: id
        }
    }).then(() => {
        res.redirect("/produtos");
    }).catch((error) => {
        console.log(error);
    })
})
export default router;
