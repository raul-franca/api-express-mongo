import CidadeService from "../services/cidadeService.js";

class CidadeController {
    static async getAllCidades(req, res) {
        try {
            const result = await CidadeService.getAllCidades(req.query);
            return res.status(200).json(result);
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }

    static async getCidadeById(req, res) {
        try {
            const { id } = req.params;
            const cidade = await CidadeService.getCidadeById(id);
            if (!cidade) {
                return res.status(404).json({ message: "Cidade não encontrada" });
            }
            return res.status(200).json(cidade);
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }

    static async createCidade(req, res) {
        try {
            const novaCidade = await CidadeService.createCidade(req.body);
            return res
                .status(201)
                .json({ message: "Nova cidade criada com sucesso!", cidade: novaCidade });
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }

    static async updateCidade(req, res) {
        try {
            const { id } = req.params;
            const cidadeAtualizada = await CidadeService.updateCidade(id, req.body);
            if (!cidadeAtualizada) {
                return res.status(404).json({ message: "Cidade não encontrada" });
            }
            return res.status(200).json(cidadeAtualizada);
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }

    static async deleteCidade(req, res) {
        try {
            const { id } = req.params;
            const cidadeDeletada = await CidadeService.deleteCidade(id);
            if (!cidadeDeletada) {
                return res.status(404).json({ message: "Cidade não encontrada" });
            }
            return res.status(200).json({ message: "Cidade deletada com sucesso" });
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }

    static async getCoordenadasById(req, res) {
        try {
            const { id } = req.params;
            const cidade = await CidadeService.getCidadeById(id);
            if (!cidade) {
                return res.status(404).json({ message: "Cidade não encontrada" });
            }

            const data = await CidadeService.getCoordenadas(cidade);
            if (data && data.length > 0) {
                return res.status(200).json(data);
            } else {
                return res.status(404).json({ message: "Coordenadas não encontradas" });
            }
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
}

export default CidadeController;