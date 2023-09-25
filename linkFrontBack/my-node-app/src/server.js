const http = require("http");
const app = require("./app");

require("dotenv").config();

const server = http.createServer(app);
const port = 3001;

server.listen(port, () => console.log(`Rodando na porta ${port}`));
