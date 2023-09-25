const express = require("express");
const app = express();
const rotaRota = require("./routes/rota");

app.get("/rota", rotaRota);

module.exports = app;
