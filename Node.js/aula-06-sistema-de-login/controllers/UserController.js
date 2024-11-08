import express from "express";
const router = express.Router();
import User from "../models/User.js";
import bcrypt from "bcrypt";

// ROTA DE LOGIN
router.get("/login", (req, res) => {
  res.render("login", {
    loggedOut: true,
    messages: req.flash()
  });
});

// ROTA DE LOGOUT
router.get("/logout", (req, res) => {
  req.session.user = undefined;
  res.redirect("/");
});

// ROTA DE CADASTRO
router.get("/cadastro", (req, res) => {
  res.render("cadastro", {
    loggedOut: true,
    messages: req.flash()
  });
});

// ROTA DE CRIACAO DE USUARIO
router.post("/createUser", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({
    where: {
      email: email,
    },
  }).then((user) => {
    // VERIFICA SE O USUARIO EXISTE
    if (user == undefined) {
      // FEITO O CADASTRO E HASH DE SENHA
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      User.create({
        email: email,
        password: hash,
      })
        .then(() => {
          res.redirect("/login");
        })
        .catch((err) => {
          console.log(`Erro ao criar ${err}`);
        });
      // CASO O USUARIO JÁ ESTEJA CADASTRADO
    } else {
      req.flash("danger", "O usuário já foi cadastrado. Faça o login! Tente novamente");
      res.redirect("/cadastro");
    }
  });
});

// ROTA DE AUTENTICAÇÃO
router.post("/authenticate", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  // BUSCA O USUARIO NO BANCO
  User.findOne({
    where: {
      email: email,
    },
  }).then((user) => {
    // SE O USUARIO ESTIVER CADASTRADO
    if (user != undefined) {
      // VALIDA A SENHA (VERIFICA O HASH)
      const correct = bcrypt.compareSync(password, user.password);
      // SE A SENHA FOR VÁLIDA
      if (correct) {
        // AUTORIZA O LOGIN
        req.session.user = {
          id: user.id,
          email: user.email,
        };
        req.flash('success', "Login efetuado com sucesso!")
        res.redirect("/");
        // SE A SENHA NÃO FOR VÁLIDA
      } else {
        // SE O USUARIO EXISTIR
        req.flash('danger', "A senha informada está incorreta! Tente novamente")
        res.redirect("/login")
      }
    } else {
      // SE O USUARIO EXISTIR
      req.flash("danger", "O Usuário informado não existe, verifique os dados digitados! Tente novamente");
      res.redirect("/login");
    }
  });
});
export default router;
