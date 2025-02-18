import express from "express";
import cidadeRoutes from "./routes/cidadeRoutes.js";
import rotaRoutes from "./routes/rotaRoutes.js";

// Criação de uma instância do express
const app = express();
// Configuração do express para receber JSON
app.use(express.json());

app.use('/', cidadeRoutes);
app.use('/', rotaRoutes);


export default app;