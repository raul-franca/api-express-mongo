import distanceService from "../services/rotaService.js";
import rotaService from "../services/rotaService.js";

class RotaController {
    static async getRota(req, res) {
        try {
            const { origemId, destinoId } = req.params;
            const  result = await rotaService.calcularRota(origemId, destinoId);
            return res.status(200).json(result);
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
}

export default RotaController;