import Cidade from "../models/cidade.js";
import fetch from "node-fetch";

class CidadeController {
    static async getCoordenadasById(req, res) {
        try {
            const { id } = req.params;
            const cidade = await Cidade.findById(id);
            if (!cidade) {
                return res.status(404).json({ message: 'Cidade não encontrada' });
            }

            const url = `https://nominatim.openstreetmap.org/search?city=${encodeURIComponent(
                cidade.nome
            )}&state=${encodeURIComponent(cidade.uf)}&format=json`;

            const response = await fetch(url, {
                headers: {
                    'User-Agent': 'Node.js Application', // Nominatim exige a especificação do User-Agent
                },
            });

            if (!response.ok) {
                return res.status(response.status).json({ message: 'Erro ao buscar coordenadas' });
            }

            const data = await response.json();
            if (data && data.length > 0) {
                return res.status(200).json(data);
            } else {
                return res.status(404).json({ message: 'Coordenadas não encontradas' });
            }
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }

    static async getAllCidades(req, res) {
        try {
            const cidades = await Cidade.find();
            return res.status(200).json(cidades);
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }

    static async getCidadeById(req, res) {
        try {
            const { id } = req.params;
            const cidade = await Cidade.findById(id);
            if (!cidade) {
                return res.status(404).json({ message: 'Cidade não encontrada' });
            }
            return res.status(200).json(cidade);
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }

    static async createCidade(req, res) {
        try {
            const addCidade = new Cidade(req.body);
            const saveCidade = await addCidade.save();
            return res
                .status(201)
                .json({ message: 'Nova cidade criada com sucesso!', cidade: saveCidade });
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }

    static async updateCidade(req, res) {
        try {
            const { id } = req.params;
            const updateCidade = await Cidade.findByIdAndUpdate(id, req.body, { new: true });
            if (!updateCidade) {
                return res.status(404).json({ message: 'Cidade não encontrada' });
            }
            return res.status(200).json(updateCidade);
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }

    static async deleteCidade(req, res) {
        try {
            const { id } = req.params;
            const deleteCidade = await Cidade.findByIdAndDelete(id);
            if (!deleteCidade) {
                return res.status(404).json({ message: 'Cidade não encontrada' });
            }
            return res.status(200).json({ message: 'Cidade deletada com sucesso' });
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
}

export default CidadeController;