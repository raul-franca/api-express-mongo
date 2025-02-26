import express from "express";
import CidadeController from "../controllers/cidadeController.js";
import pagination from "../middlewares/pagination.js";

const router = express.Router();

router.get('/cidades', CidadeController.getAllCidades, pagination ); // query params ex: /cidades?limit=10&page=1
router.get('/cidades/buscar/uf/:uf', CidadeController.getAllCidadesByUf );
router.get('/cidades/buscar/nome/:nome', CidadeController.getAllCidadesByNome );
router.get('/cidades/buscar/uf-nome', CidadeController.getAllCidadesByUfAndNome ); // query params ex: /cidades/buscar/uf-nome?uf=PE&nome=Recife
router.get('/cidades/:id', CidadeController.getCidadeById );
router.post('/cidades', CidadeController.createCidade );
router.put('/cidades/:id', CidadeController.updateCidade );
router.delete('/cidades/:id', CidadeController.deleteCidade );
router.get('/cidades/coordenadas/:id', CidadeController.getCoordenadasById );

export default router;