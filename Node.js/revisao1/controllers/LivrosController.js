import Livro from "../models/Livros.js";
import express from "express";
const router = express.Router()

router.get("/", (req, res) => {
  Livro.findAll().then(livros =>{
    res.render("livros", {
      livros:livros
    })
  })
})

export default router