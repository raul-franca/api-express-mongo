import rotaService from "../services/rotaService.js";

class RotaController {
    static async getRota(req, res, next) {
        try {
            const { origemId, destinoId } = req.params;
            const  result = await rotaService.calcularRota(origemId, destinoId);
            return res.status(200).json(result);
        } catch (err) {
            next(err);
        }
    }
}

export default RotaController;