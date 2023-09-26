const express = require("express");
const routes = express.Router();
const sgMail = require("@sendgrid/mail");

require("dotenv").config();
sgMail.setApiKey(process.env.SG_KEY);

routes.post("/envia-email", (req, res, next) => {
  const { nome, email, assunto, mensagem } = req.body;
  const msg = {
    to: process.env.TO_MAIL,
    from: process.env.TO_MAIL,
    subject: assunto,
    text: `${nome}: ${mensagem}\n${email}`,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email enviado com sucesso!");
    })
    .catch((error) => {
      console.error(error);
    });
  return res.status(201).json({
    nome: nome,
    email: email,
    assunto: assunto,
    mensagem: mensagem,
  });
});

module.exports = routes;
