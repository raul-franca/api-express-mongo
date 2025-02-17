import Cidade from "../models/cidade.js";
import fetch from "node-fetch";

class CidadeService {
    // Busca todas as cidades com paginação
    static async getAllCidades(query) {
        let limit = parseInt(query.limit, 10) || 10;
        let page = parseInt(query.page, 10) || 1;
        const skip = (page - 1) * limit;

        const cidades = await Cidade.find().skip(skip).limit(limit);
        const total = await Cidade.countDocuments();
        const totalPages = Math.ceil(total / limit);

        return { total, totalPages, page, limit, cidades };
    }

    // Busca uma cidade pelo ID
    static async getCidadeById(id) {
        return await Cidade.findById(id);
    }

    // Cria uma nova cidade
    static async createCidade(data) {
        const cidade = new Cidade(data);
        return await cidade.save();
    }

    // Atualiza uma cidade existente
    static async updateCidade(id, data) {
        return await Cidade.findByIdAndUpdate(id, data, { new: true });
    }

    // Deleta uma cidade
    static async deleteCidade(id) {
        return await Cidade.findByIdAndDelete(id);
    }

    // Busca coordenadas de uma cidade através da API do Nominatim
    static async getCoordenadas(cidade) {
        const url = `https://nominatim.openstreetmap.org/search?city=${encodeURIComponent(
            cidade.nome
        )}&state=${encodeURIComponent(cidade.uf)}&format=json`;

        const response = await fetch(url, {
            headers: {
                "User-Agent": "Node.js Application", // Nominatim exige o User-Agent
            },
        });

        if (!response.ok) {
            throw new Error("Erro ao buscar coordenadas");
        }

        const data = await response.json();
        return data;
    }
}

export default CidadeService;