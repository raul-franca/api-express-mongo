import { readFileSync } from "fs";
import express from "express";
import cidadeRoutes from "./routes/cidadeRoutes.js";
import rotaRoutes from "./routes/rotaRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";
import notFoundHandler from "./middlewares/notFoundHandler.js";
import swaggerUi from "swagger-ui-express";


// Construct absolute file path for the JSON file
const swaggerPath = new URL("./documentation/swagger-output.json", import.meta.url);
const swaggerOutput = JSON.parse(readFileSync(swaggerPath, "utf-8"));

// Criação de uma instância do express
const app = express();
// Configuração do express para receber JSON
app.use(express.json());

app.use('/', cidadeRoutes);
app.use('/', rotaRoutes);


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput));


app.use(notFoundHandler);

app.use(errorHandler);


export default app;