import express from "express";
import cidadeRoutes from "./routes/cidadeRoutes.js";
// import Cidade from "./models/cidade.js";
// import fetch from "node-fetch";


// Criação de uma instância do express
const app = express();
// Configuração do express para receber JSON
app.use(express.json());

app.use('/', cidadeRoutes);



export default app;