const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes/email");
app.use(express.json());
app.use(cors());
// Rota de exemplo
app.use(routes);

// Outras rotas API aqui...

module.exports = app;
