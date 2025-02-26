import Cidade from "../models/cidade.js";
import fetch from "node-fetch";

class CidadeService {
    // Busca todas as cidades com paginação
    static async getAllCidades(query, pagination) {

        const { limit, skip } = pagination;
        const cidades = await Cidade.find().skip(skip).limit(limit);

        const total = await Cidade.countDocuments();
        const totalPages = Math.ceil(total / limit);

        return { total, totalPages, page: pagination.page, limit, cidades };

    }
    //filtro por uf e nome
    static async getAllCidadesByUfAndNome(query, pagination) {

        const filter = {};
        if (query.uf) { filter.uf = new RegExp(query.uf, "i") }
        if (query.nome) { filter.nome = new RegExp(query.nome, "i") }

        const { limit, skip } = pagination;
        const cidades = await Cidade.find(filter).skip(skip).limit(limit);

        const total = await Cidade.countDocuments();
        const totalPages = Math.ceil(total / limit);

        return { total, totalPages, page: pagination.page, limit, cidades };
    }


    // Busca todas as cidades por uf com paginação
    static async getAllCidadesByUf(query, pagination) {

        const uf = new RegExp(query.uf, "i");

        const { limit, skip } = pagination;
        const cidades = await Cidade.find({uf: uf}).skip(skip).limit(limit);

        const total = await Cidade.countDocuments();
        const totalPages = Math.ceil(total / limit);

        return { total, totalPages, page: pagination.page, limit, cidades };
    }

    static async getAllCidadesByNome(query, pagination) {

        const nome = new RegExp(query.nome, "i");

        const { limit, skip } = pagination;
        const cidades = await Cidade.find({nome: nome}).skip(skip).limit(limit);

        const total = await Cidade.countDocuments();
        const totalPages = Math.ceil(total / limit);

        return { total, totalPages, page: pagination.page, limit, cidades };
    }

    static async getCidadeById(id) {
        return await Cidade.findById(id);
    }


    static async createCidade(data) {
        const cidade = new Cidade(data);
        return await cidade.save();
    }


    static async updateCidade(id, data) {
        return await Cidade.findByIdAndUpdate(id, data, { new: true });
    }


    static async deleteCidade(id) {
        return await Cidade.findByIdAndDelete(id);
    }


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

        return await response.json();
    }
}

export default CidadeService;