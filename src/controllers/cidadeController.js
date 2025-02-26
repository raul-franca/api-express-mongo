import CidadeService from "../services/cidadeService.js";

class CidadeController {
    static async getAllCidades(req, res, next) {
        try {
            const result = await CidadeService.getAllCidades(req.query, req.pagination);

            return res.status(200).json(result);
        } catch (err) {
            next(err);
        }
    }

    static async getAllCidadesByUf(req, res, next) {

        try {
            const result = await CidadeService.getAllCidadesByUf(req.params, req.pagination);
            if (result !== null) {
                return res.status(200).json(result);
            }
            return res.status(404).json({ message: "UF não encontrada" });

        } catch (err) {
            next(err);
        }
    }

    static async getAllCidadesByNome(req, res,next) {

        try {
            const result = await CidadeService.getAllCidadesByNome(req.params, req.pagination);
            if(result !== null){
                return res.status(200).json(result);
            }
            return res.status(404).json({ message: "Cidade não encontrada" });
        } catch (err) {
            next(err);
        }
    }

    static async getAllCidadesByUfAndNome(req, res, next) {
        try {
            const result = await CidadeService.getAllCidadesByUfAndNome(req.query, req.pagination);
            if (result !== null) {
                return res.status(200).json(result);
            }
            return res.status(404).json({ message: "UF e Nome não encontrados" });
        } catch (err) {
            next(err);
        }
    }

    static async getCidadeById(req, res, next) {
        try {
            const { id } = req.params;
            const cidade = await CidadeService.getCidadeById(id);
            if (!cidade) {
                return res.status(404).json({ message: "Cidade não encontrada" });
            }
            return res.status(200).json(cidade);
        } catch (err) {
            next(err);
        }
    }

    static async createCidade(req, res, next) {
        try {
            const novaCidade = await CidadeService.createCidade(req.body);
            return res
                .status(201)
                .json({ message: "Nova cidade criada com sucesso!", cidade: novaCidade });
        } catch (err) {
            next(err);
        }
    }

    static async updateCidade(req, res, next) {
        try {
            const { id } = req.params;
            const cidadeAtualizada = await CidadeService.updateCidade(id, req.body);
            if (!cidadeAtualizada) {
                return res.status(404).json({ message: "Cidade não encontrada" });
            }
            return res.status(200).json(cidadeAtualizada);
        } catch (err) {
            next(err);
        }
    }

    static async deleteCidade(req, res, next) {
        try {
            const { id } = req.params;
            const cidadeDeletada = await CidadeService.deleteCidade(id);
            if (!cidadeDeletada) {
                return res.status(404).json({ message: "Cidade não encontrada" });
            }
            return res.status(200).json({ message: "Cidade deletada com sucesso" });
        } catch (err) {
            next(err);
        }
    }

    static async getCoordenadasById(req, res, next) {
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
            next(err);
        }
    }
}

export default CidadeController;