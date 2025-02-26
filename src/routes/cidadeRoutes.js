import express from "express";
import CidadeController from "../controllers/cidadeController.js";
import pagination from "../middlewares/pagination.js";

const router = express.Router();

// não middleware pagination antes de CidadeController.getAllCidades
router.get('/cidades', pagination, CidadeController.getAllCidades ); // query params ex: /cidades?limit=10&page=1
router.get('/cidades/buscar/uf/:uf', pagination, CidadeController.getAllCidadesByUf );
router.get('/cidades/buscar/nome/:nome', pagination, CidadeController.getAllCidadesByNome );
router.get('/cidades/buscar/uf-nome', pagination, CidadeController.getAllCidadesByUfAndNome ); // query params ex: /cidades/buscar/uf-nome?uf=PE&nome=Recife
router.get('/cidades/:id', CidadeController.getCidadeById );
router.post('/cidades', CidadeController.createCidade );
router.put('/cidades/:id', CidadeController.updateCidade );
router.delete('/cidades/:id', CidadeController.deleteCidade );
router.get('/cidades/coordenadas/:id', CidadeController.getCoordenadasById );

export default router;