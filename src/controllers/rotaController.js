import rotaService from "../services/rotaService.js";

/**
 * @swagger
 * /rotas/{origemId}/{destinoId}:
 *   get:
 *     summary: Calcula a rota entre duas localizações
 *     tags: [Rotas]
 *     parameters:
 *       - in: path
 *         name: origemId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da localidade de origem
 *       - in: path
 *         name: destinoId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da localidade de destino
 *     responses:
 *       200:
 *         description: Rota calculada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 caminho:
 *                   type: array
 *                   items:
 *                     type: string
 *                   description: Sequência de pontos ou IDs representando o caminho
 *                 distancia:
 *                   type: number
 *                   description: Distância total em quilômetros
 *                 tempo:
 *                   type: number
 *                   description: Tempo estimado de viagem em minutos
 *       404:
 *         description: Rota não encontrada
 *       500:
 *         description: Erro interno no servidor
 */
class RotaController {

    static async getRota(req, res, next) {
        try {
            const { origemId, destinoId } = req.params;
            const result = await rotaService.calcularRota(origemId, destinoId);
            return res.status(200).json(result);
        } catch (err) {
            next(err);
        }
    }
}

export default RotaController;