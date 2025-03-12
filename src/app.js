import express from "express";
import cidadeRoutes from "./routes/cidadeRoutes.js";
import rotaRoutes from "./routes/rotaRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";
import notFoundHandler from "./middlewares/notFoundHandler.js";
import { swaggerUi, specs } from "./swagger.js";


// Criação de uma instância do express
const app = express();
// Configuração do express para receber JSON
app.use(express.json());

app.use('/', cidadeRoutes);
app.use('/', rotaRoutes);

// Rota para a documentação
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use(notFoundHandler);

app.use(errorHandler);


export default app;