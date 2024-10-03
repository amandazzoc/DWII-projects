import express from "express";
import Pedido from "../models/Pedido.js";
const router = express.Router();

// ROTA PEDIDOS
router.get("/pedidos", function (req, res) {
  Pedido.findAll().then((pedidos) => {
    res.render("pedidos", {
      pedidos: pedidos,
    });
  });
});

// ROTA DE CADASTRO DE PEDIDO
router.post("/pedidos/new", (req, res) => {
  const numero = req.body.numero;
  const valor = req.body.valor;
  Pedido.create({
    numero: numero,
    valor: valor,
  }).then(() => {
    res.redirect("/pedidos");
  });
});

// ROTA DE EXCLUSÃO
router.get("/pedidos/delete/:id", (req, res) => {
    const id = req.params.id
    Pedido.destroy({
        where:{
            id:id
        }
    }).then(() => {
        res.redirect("/pedidos");
    }).catch((error) => {
        console.log(error);
    })
})

// ROTA DE EDIÇÃO DE CLIENTE
router.get("/pedidos/edit/:id", (req, res) => {
  const id = req.params.id
  Pedido.findByPk(id).then((pedido) => {
    res.render("pedidoEdit", {
      pedido: pedido
    })
  })
})

// ROTA DE ALTERAÇÃO DE CLIENTE
router.post("/pedidos/update", (req, res) => {
  const id = req.body.id
  const numero = req.body.numero
  const valor = req.body.valor
  Pedido.update(
    {
      numero: numero,
      valor: valor
    },
    {
      where: {
        id:id
      }
    }
  ).then(() => {
    res.redirect("/pedidos")
  }).catch((error) => {
    console.log("Erro ao editar os dados: " + error);
  })
})
export default router;
