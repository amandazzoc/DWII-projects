const express = require("express");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/clientes", function (req, res) {

  const listaClientes = [
    { nome: "Amanda", cpf: "517.261.838-40", endereco: "Rua Sabiá, 80" },
    { nome: "Camila", cpf: "331.671.898-28", endereco: "Rua Sabiá, 80" },
    {
      nome: "Edgar",
      cpf: "445.738.248-65",
      endereco: "Rua Salvador Moreira, 105",
    },
    {
      nome: "Wesley",
      cpf: "236.827.358-01",
      endereco: "Rua Salvador Moreira, 115",
    },
    {
      nome: "Maria Dasdores",
      cpf: "665.853.728-23",
      endereco: "Rua Papagaio, 85",
    },
  ];
  res.render("clientes", {
    listaClientes: listaClientes,

  });
});

app.get("/produtos/:produto?", function (req, res) {
    const produto = req.params.produto;
  const listaProdutos = [
    {
      imagem: "/img/produto/loção.webp",
      nome: "Loção Radiante Desodorante Corporal Nativa Spa Ameixa Dourada 100ml",
      preco: 15.9,
      categoria: "Nativa SPA",
    },
    {
      nome: "Creme Nutritivo Firmador Resveratrol E Silício 40g",
      preco: 131.92,
      categoria: "Botik",
    },
    {
      nome: "African Sunrise Floral Frutal Eau De Parfum 75ml",
      preco: 169.9,
      categoria: "Botica 214",
    },
    {
      nome: "Gold Desodorante Colônia 75ml",
      preco: 119.9,
      categoria: "Floratta",
    },
    {
      nome: "Sérum Para Cílios e Sobrancelhas Explosion Grow 5g",
      preco: 51.90,
      categoria: "Make B.",
    },
  ];
    res.render("produtos", {
        listaProdutos: listaProdutos,
        produto: produto,
    });
  });

app.get("/pedidos/:id?", function (req, res) {
  const id = req.params.id;
  const listaPedidos = [
    { numeroPedido: 1, valor: 199.90 },
    { numeroPedido: 2, valor: 26.90 },
    { numeroPedido: 3, valor: 144.90 },
    { numeroPedido: 4, valor: 62.80 },
    { numeroPedido: 5, valor: 34.904 },
    { numeroPedido: 6, valor: 124.70 },
  ];
  res.render("pedidos", {
    listaPedidos: listaPedidos,
    id: id,
  });
});

app.listen(8080, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});
