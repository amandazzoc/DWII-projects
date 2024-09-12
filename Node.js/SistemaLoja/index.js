const express = require("express");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/clientes/:cpf?", function (req, res) {
  const cpf = req.params.cpf;
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
    cpf: cpf,
  });
});

app.get("/produtos/:produto?", function (req, res) {
    const produto = req.params.produto;
  const listaProdutos = [
    {
      nome: "Capa Case para Kindle 10° Gen",
      preco: 32.99,
      categoria: "Variedades",
    },
    {
      nome: "Agulha de Crochê Tunisiano",
      preco: 16.75,
      categoria: "Armarinho",
    },
    { nome: "Lovito Macacão casual", preco: 64.45, categoria: "Roupas" },
    { nome: "Máquina de Donuts", preco: 44.99, categoria: "Cozinha" },
    { nome: "Linha Hauskraft Coleção Oasis", preco: 48.99, categoria: "Casa" },
  ];
    res.render("produtos", {
        listaProdutos: listaProdutos,
        produto: produto,
    });
  });

app.get("/pedidos/:id?", function (req, res) {
  const id = req.params.id;
  const listaPedidos = [
    { numeroPedido: 1, valor: 32.99 },
    { numeroPedido: 2, valor: 33.5 },
    { numeroPedido: 3, valor: 81.2 },
    { numeroPedido: 4, valor: 97.98 },
    { numeroPedido: 5, valor: 49.74 },
    { numeroPedido: 6, valor: 93.98 },
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
