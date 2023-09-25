const express = require("express");
const routes = express.Router();
const sgMail = require("@sendgrid/mail");
require("dotenv").config();

sgMail.setApiKey(process.env.SG_KEY);

routes.post("/envia-email", (req, res, next) => {
  const { nome, email, assunto, mensagem } = req.body;
  const msg = {
    to: process.env.TO_MAIL, // Change to your recipient
    from: email, // Change to your verified sender
    subject: assunto,
    text: `${nome}: ${mensagem}`,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
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
