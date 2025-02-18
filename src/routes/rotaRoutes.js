import express from "express";
import RotaController from "../controllers/rotaController.js";

const router = express.Router();

router.get('/rotas/:origemId/:destinoId', RotaController.getRota);

export default router;