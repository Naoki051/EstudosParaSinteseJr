const express = require("express");
const routes = express.Router();

routes.post("/envia-email", (req, res, next) => {
  const { nome, email, assunto, mensagem } = req.body;
  return res.status(201).json({
    nome: nome,
    email: email,
    assunto: assunto,
    mensagem: mensagem,
  });
});

module.exports = routes;
