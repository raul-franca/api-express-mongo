import express from "express";
import CidadeController from "../controllers/cidadeController.js";

const router = express.Router();

router.get('/cidades', CidadeController.getAllCidades);
router.get('/cidades/uf', CidadeController.getAllCidadesByUf);
router.get('/cidades/nome', CidadeController.getAllCidadesByNome);
router.get('/cidades/:id', CidadeController.getCidadeById);
router.post('/cidades', CidadeController.createCidade);
router.put('/cidades/:id', CidadeController.updateCidade);
router.delete('/cidades/:id', CidadeController.deleteCidade);
router.get('/cidades/coordenadas/:id', CidadeController.getCoordenadasById);

export default router;